(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("49e3def0-6298-44ec-8850-966eb06bceee");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '49e3def0-6298-44ec-8850-966eb06bceee' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;a9708e16-42ad-4ab5-83ad-351ab3439a82&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;n4ovGGFRB8DWYAFxkoUDwBJDa62m7ALAPccKC51h/7/bySvoj8j7vz1L84Ii2Pm/HedO7qjA+L8NxfoUTmT2v+oWnD4qevO/yS/mWbm08r+OCb9Toivxvy8o78Rbj/C/arzK+Fy077+uWGlpibnuv2ZPx7cRxeu/BUxVsdOB6b/a98Cjt/Xov5rl6CvSpea/QdHxAkU15b8HC2n0w7nkvz05d0u/ZeS/jf9ozyjd4r8Y59V5jpXfv+qOp6cU6ty/DaYjG6xN3L9lNlX0vKjbv2yKqXOzxdq/qlb5oRT42b+bcUDw+BrWv5wrkJfS0dW/yozPEgDN0794humFVOrLv22yibwCvsu/Kv9bi0HVyb8wPoGT0gDBv1fPKE+ESL+/hb2Jiwc6tL/tTpbsl/uxvwbUaOniqaC/fIcHQu78jD+CwEL7GyqvPwreOCFWiLE/ihavJ4f5wD9Y9CCKx3LBPydJ3/m9c8E/aZJbrPPxwT+gWJy/BRDHP+3y6y6d6cw/E5uK0ZhhzT8Uy9+sGzPSP/bJUSyQdNI/eQTPVR9N0z8mb0uPn2PTPy4wx+i+FtU/AUJLMs6K1j/KXy2FRgnYP/QncXwGUts//LaWCrtp2z9loP/6SYLbPz7AoXWG+tw/VDa6Q5563T/Rdb4pu3/hP7Eyh2o4GOM/0NcNx4p04z/zau4ikEbkP5CUWxkEVeU/00Ob8hmS5j8O83w/VT7nP0Lf+hwIE+o/WYKgDOBj6j9BpWWQjhbrPydUnjHOyuw/NHiT2NEE7T+8b74kxd3tPz/e5RY1Ke4/HiEOv71Q7z8cCebuSLvvP7706ncH7O8/UGyd6uGR8D+fcDdVm9nwP1nRZXkMhvE/dTo7I4uU8T/o+YxGquTxPyte3K0k0/I/Euu+C24A8z8SIKm5+8TzPxJ3M6H0h/Y/os2IOl/c9j/y9OSBDab3PwwkOUlBovg/9PkXUMH5+D/Z4KRzOnn6P2j6ant4n/o/DwQUTFg1+z/HDHRcIXf7P9Zf6WZ00fs/EA4aIR4z/D9T+5mx4ZT8PyFFFKzfaQNA3353kTcUCEA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;wuqgzz1d4T9UPv0d2/ToP9x5KaWyJuo/Ypx6ejFP8D8SG+oLuBvyP2Jahr7uE/M/cozYiKuf8z96nYL12M30P4v0seDqQvY/HOgMU6Ol9j85eyDWLmr3P+hriB1SuPc/5lDNwegS+D/UqaWlnVH4PyYsDpK7Dvk//6yqE4uf+T8Kwg8XksL5P5rGBXWLVvo/sItDv66y+j8+veUCj9H6P7ExIi2Q5vo/HcAlzLVI+z8dQ8UwTg38PyMOC2u9Yvw/PoubfEp2/D8zWXVh6Ir8P7LOipFJp/w/K9XAa/3A/D/N8ffhoDz9P4z6Da3FRf0/Zw6m/V+G/T+YZ6G3WkH+P9lkN9QfRP4/DUBK56ti/j8d7MfW8u/+P4W5ht27Bf8/FLKjwy9e/z+JTZtAI3D/P7BcWnRYvf8/xAMhd34OAECBhfY3VD4AQHjjhFghRgBAtHg9OcyHAECjB1E8losAQEn6zu+diwBAk9xinY+PAEDF4vwtgLgAQJdfd+lM5wBA2VSMxgzrAECx/M26MSMBQJ8cxQJJJwFASPBc9dE0AUDytvT4OTYBQANzjO5rUQFAILQk46xoAUD91VJolIABQH8Sx2cgtQFAcGupsJu2AUAG+q+fJLgBQAQcWmeozwFAZaM75KnXAUC6zjdl9y8CQFbmUA0HYwJA+rrhWJFuAkBezV0E0ogCQJJyK4OgqgJAemhTPkPSAkBinu+nyucCQOhbnwNhQgNASxCUAXxMA0CotAzS0WIDQIXKM8ZZmQNABm8SO5qgA0D4zZekuLsDQMi73KImxQNAJMThtxfqA0AkwdwdafcDQJhe/e6A/QNAFFunengkBEAo3E3VZjYEQFZ0WR6DYQRAnc7OyCJlBEB6PqORKnkEQIsXdyvJtARAxLrvghvABEAESGruPvEEQMTdTCj9oQVAaDOizhe3BUA8PXlgg+kFQANJTlKQKAZAff4FVHA+BkA2OOmcTp4GQJq+2h7epwZABAEFE1bNBkAyAx1XyN0GQPZXuhld9AZAhINGiMcMB0DVfmZsOCUHQJAiCtbvtAlAcL+7yBsKDEA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66706&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66707&quot;}},&quot;id&quot;:&quot;66691&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66691&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66692&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66693&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66695&quot;}},&quot;id&quot;:&quot;66694&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66692&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66668&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66667&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66651&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66676&quot;}},&quot;id&quot;:&quot;66671&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66691&quot;}},&quot;id&quot;:&quot;66695&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66663&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;66666&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66693&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;66696&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66655&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;66674&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66686&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66687&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66688&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66690&quot;}},&quot;id&quot;:&quot;66689&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66675&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66704&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66705&quot;}},&quot;id&quot;:&quot;66686&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66707&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66670&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66664&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66706&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66672&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66698&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66664&quot;}},&quot;id&quot;:&quot;66663&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66675&quot;}},&quot;id&quot;:&quot;66669&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66698&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66705&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66688&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66676&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66673&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66660&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66700&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66660&quot;}},&quot;id&quot;:&quot;66659&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;66659&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;66662&quot;},{&quot;id&quot;:&quot;66666&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;66663&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;66689&quot;},{&quot;id&quot;:&quot;66694&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;66696&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;66677&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;66651&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;66655&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;66653&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;66657&quot;}},&quot;id&quot;:&quot;66650&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66704&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66687&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66700&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66653&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66659&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;66662&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66686&quot;}},&quot;id&quot;:&quot;66690&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66657&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;66667&quot;},{&quot;id&quot;:&quot;66668&quot;},{&quot;id&quot;:&quot;66669&quot;},{&quot;id&quot;:&quot;66670&quot;},{&quot;id&quot;:&quot;66671&quot;},{&quot;id&quot;:&quot;66672&quot;},{&quot;id&quot;:&quot;66673&quot;},{&quot;id&quot;:&quot;66674&quot;}]},&quot;id&quot;:&quot;66677&quot;,&quot;type&quot;:&quot;Toolbar&quot;}],&quot;root_ids&quot;:[&quot;66650&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"a9708e16-42ad-4ab5-83ad-351ab3439a82","root_ids":["66650"],"roots":{"66650":"49e3def0-6298-44ec-8850-966eb06bceee"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();