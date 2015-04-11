/*jslint node: true */
'use strict';

var parse = require('parseparams');

module.exports = function(getConstructor) {

    if (typeof getConstructor !== 'function') throw new Error('Invalid constructor');
    return parse(getConstructor)[0] === 'init' ? {

        extend: function(PrototypeConstructor) {

            var sṵper = {};
            var constructor = getConstructor(function() {

                var args = arguments;
                var self = this;
                return {

                    self: function(that) {

                        self = that || self;
                        if (typeof PrototypeConstructor === 'function') {

                            if (self instanceof PrototypeConstructor) {

                                PrototypeConstructor.apply(self, args);
                                sṵper.super = self.super;
                                self.super = {

                                    super: self.super
                                };
                                for (var property in self) {

                                    if (self.hasOwnProperty(property) && typeof self[property] === 'function') {

                                        self.super[property] = sṵper[property] = self[property].bind(self);
                                    }
                                }
                            } else throw new Error('invalid this object');
                        }
                        return self;
                    }
                }
            }, sṵper);
            if (typeof constructor !== 'function') throw new Error('Invalid constructor');
            return typeof PrototypeConstructor === 'function' ? {

                parameters: function() {

                    if (arguments.length > 0) {

                        var args = Array.prototype.slice.call(arguments);
                        args.unshift(null);
                        var BindedPrototypeConstructor = Function.prototype.bind.apply(PrototypeConstructor, args);
                        BindedPrototypeConstructor.prototype = PrototypeConstructor.prototype;
                        constructor.prototype = new BindedPrototypeConstructor();
                    } else {

                        constructor.prototype = new PrototypeConstructor();
                    }
                    constructor.prototype.constructor = constructor;
                    return constructor;
                },
                constructor: constructor
            } : constructor;
        }
    } : getConstructor;
};
