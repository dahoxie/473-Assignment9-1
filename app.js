/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
function ViewModel() {
    "use strict";
    var self = this;
    self.comment = ko.observable("");

    self.comments = ko.observableArray([{
        comm: "This is the first comment!"
    }, {
        comm: "Here's the second one!"
    }, {
        comm: "And this is one more."
    }, {
        comm: "Here is another one!"
    }]);

    submitFunction = function(data, event) {
        if (event.which === 13) {
            self.comments.push({
                comm: self.comment()
            });
        }
        console.log("Enter key");

    };

    clickFunction = function() {
        self.comments.push({
            comm: self.comment()
        });
        console.log("Button");
    };

}


$(document).ready(ko.applyBindings(new ViewModel()));
