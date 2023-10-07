"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sponsori = function (_React$Component) {
  _inherits(Sponsori, _React$Component);

  function Sponsori(props) {
    _classCallCheck(this, Sponsori);

    var _this = _possibleConstructorReturn(this, (Sponsori.__proto__ || Object.getPrototypeOf(Sponsori)).call(this, props));

    _this.sponsori = [
    {
      nume: "Plimob",
      poza: "poze/sponsori/plimob.png",
      facebook: "https://www.plimob.ro/ro/home"
    },
    {
      nume: "Bazil1992",
      poza: "poze/sponsori/bazil.png",
      facebook: "https://www.facebook.com/Bazil1992"
    }, {
      nume: "Dent Medica",
      poza: "poze/sponsori/dentMedica.png",
      facebook: "https://www.dentmedica.ro/"
    }, {
      nume: "Colibri",
      poza: "poze/sponsori/colibri.png",
      facebook: "https://www.facebook.com/colibriprintshop/"
    }, {
      nume: "Arhi-Proiect",
      poza: "poze/sponsori/arhi-proiect.jpeg"
    }, {
      nume: "Granell",
      poza: "poze/sponsori/granell.png",
      facebook: "granell.ro"
    }];
    return _this;
  }

  _createClass(Sponsori, [{
    key: "renderSponsor",
    value: function renderSponsor(sponsor) {
      return React.createElement(Sponsor, { sponsor: sponsor });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var script = document.createElement("script");
      script.src = "shhh.js";
      script.async = true;

      document.body.appendChild(script);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { id: "sliderSponsori" },
        this.sponsori.map(function (sponsor) {
          return _this2.renderSponsor(sponsor);
        })
      );
    }
  }]);

  return Sponsori;
}(React.Component);

function Sponsor(props) {
  var hasFacebook = props.sponsor.facebook;
  return React.createElement(
    "div",
    { "class": "slide sponsor", key: props.sponsor.nume },
    React.createElement("img", {
      src: props.sponsor.poza,
      alt: props.sponsor.nume,
      height: "250vh",
      width: "auto"
    }),
    React.createElement(
      "h3",
      null,
      props.sponsor.nume
    ),
    React.createElement(
      "div",
      { "class": "contact-membru" },
      hasFacebook ? React.createElement(
        "a",
        { href: props.sponsor.facebook },
        React.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "-6 0 30 30",
            width: "30",
            height: "30",
            preserveAspectRatio: "xMinYMin",
            "class": "icon__icon"
          },
          React.createElement("path", { d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" }),
          " "
        )
      ) : React.createElement("span", null)
    )
  );
}

var domContainer = document.querySelector("#sponsoriReact-container");
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Sponsori, null));