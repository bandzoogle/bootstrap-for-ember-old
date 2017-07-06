(function() {
  Bootstrap.BsButtonComponent = Ember.Component.extend(Bootstrap.TypeSupport, Bootstrap.SizeSupport, {
    layoutName: 'components/bs-button',
    tagName: 'button',
    classNames: ['btn'],
    classNameBindings: ['blockClass'],
    classTypePrefix: 'btn',
    clickedParam: null,
    block: null,
    attributeBindings: ['disabled', 'dismiss:data-dismiss', '_type:type', 'style'],
    _type: 'button',
    bubbles: true,
    allowedProperties: ['title', 'type', 'size', 'block', 'disabled', 'clicked', 'dismiss', 'class'],
    icon_active: void 0,
    icon_inactive: void 0
  }, {
    init: function() {
      var attr, c, key, _i, _len, _ref, _results;
      this._super();
      if ((this.get('content') != null) && Ember.typeOf(this.get('content')) === 'instance') {
        c = this.get('content');
        _ref = this.get('allowedProperties');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          key = _ref[_i];
          if (c[key] != null) {
            this.set(key, c[key]);
          }
        }
      } else {
        if (this.get('title') == null) {
          this.set('title', this.get('content'));
        }
      }
      _results = [];
      for (attr in this) {
        if (attr.match(/^data-[\w-]*$/) != null) {
          _results.push(this.attributeBindings.pushObject(attr));
        }
      }
      return _results;
    },
    blockClass: (function() {
      if (this.block) {
        return "" + this.classTypePrefix + "-block";
      } else {
        return null;
      }
    }).property('block'),
    click: function(evt) {
      if (!this.get('bubbles')) {
        evt.stopPropagation();
      }
      return this.sendAction('clicked', this.get('clickedParam'));
    },
    loadingChanged: (function() {
      var loading;
      loading = this.get('loading') !== null ? this.get('loading') : "reset";
      return Ember.$("#" + this.elementId).button(loading);
    }).observes('loading'),
    icon: (function() {
      if (this.get('isActive')) {
        return this.get('icon_active');
      } else {
        return this.get('icon_inactive');
      }
    }).property('isActive')
  });

  Ember.Handlebars.helper('bs-button', Bootstrap.BsButtonComponent);

}).call(this);

/*
Button Group.

In its simple form, each item in the button group is a Bootstrap.Button component,
In case this is a Radio, each item is rendered as a label.
*/


(function() {
  Bootstrap.BsBtnGroup = Bootstrap.ItemsView.extend(Bootstrap.SizeSupport, Bootstrap.ItemsSelection, {
    classTypePrefix: ['btn-group'],
    classNames: ['btn-group'],
    classNameBindings: ['vertical:btn-group-vertical'],
    itemViewClass: Bootstrap.BsButtonComponent.extend(Bootstrap.ItemValue, Bootstrap.ItemSelection, {
      init: function() {
        this._super();
        this.set('icon_active', this.get('parentView.icon_active'));
        return this.set('icon_inactive', this.get('parentView.icon_inactive'));
      }
    })
  });

  Ember.Handlebars.helper('bs-btn-group', Bootstrap.BsBtnGroup);

}).call(this);

/*
Button Toolbar.

A collection of button groups
*/


(function() {
  Bootstrap.BsBtnToolbarComponent = Ember.Component.extend({
    layoutName: 'components/bs-btn-toolbar',
    classNames: ['btn-toolbar']
  });

  Ember.Handlebars.helper('bs-btn-toolbar', Bootstrap.BsBtnToolbarComponent);

}).call(this);

Ember.TEMPLATES["components/bs-button"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("    <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("icon")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push("></i>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  stack1 = helpers['if'].call(depth0, "icon", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers._triageMustache.call(depth0, "title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers._triageMustache.call(depth0, "yield", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"useData":true});
Ember.TEMPLATES["components/bs-btn-toolbar"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "yield", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"useData":true});