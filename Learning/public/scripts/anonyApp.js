"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.onPick = _this.onPick.bind(_this);
    _this.removeAll = _this.removeAll.bind(_this);
    _this.addOption = _this.addOption.bind(_this);
    _this.removeOption = _this.removeOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "onPick",
    value: function onPick() {
      var index = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[index]);
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "removeOption",
    value: function removeOption(item) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return option !== item;
          })
        };
      });
    }
  }, {
    key: "addOption",
    value: function addOption(option) {
      if (option) {
        this.setState(function (prevState) {
          if (prevState.options.indexOf(option) == -1) {
            return {
              options: prevState.options.concat(option)
            };
          } else {
            alert("Option is already exists.");
          }
        });
      } else {
        alert("Please fill the empty field.");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision App";
      var subtitle = "Welcome to decision maker.";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, {
          title: title,
          subtitle: subtitle
        }),
        React.createElement(Action, {
          onPick: this.onPick,
          status: this.state.options.length >= 2
        }),
        React.createElement(Options, {
          options: this.state.options,
          removeAll: this.removeAll,
          removeOption: this.removeOption
        }),
        React.createElement(AddOption, { addOption: this.addOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: props.onPick,
        disabled: !props.status
      },
      "What should I pick"
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.option,
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.removeOption(props.option);
        }
      },
      "Remove"
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.removeAll },
      "Remove All"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        removeOption: props.removeOption,
        option: option
      });
    })
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.add = _this2.add.bind(_this2);
    return _this2;
  }

  _createClass(AddOption, [{
    key: "add",
    value: function add(e) {
      if (e.keyCode == undefined) {
        var option = document.getElementById("option").value;
        this.props.addOption(option);
        document.getElementById("option").value = "";
      } else if (e.keyCode == 13) {
        var _option = document.getElementById("option").value;
        this.props.addOption(_option);
        document.getElementById("option").value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("input", {
          id: "option",
          type: "text",
          onKeyUp: this.add
        }),
        React.createElement(
          "button",
          { onClick: this.add },
          "Add Option"
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("root"));
