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
    
      
      
    
      var element = document.getElementById("8300668b-0e5c-449f-9068-2eea5a25bec9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8300668b-0e5c-449f-9068-2eea5a25bec9' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;ec1bc67a-986d-4ef0-aac0-183389537745&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65168&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65205&quot;}},&quot;id&quot;:&quot;65201&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65152&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65185&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65220&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65187&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65205&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65192&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65230&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65189&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65169&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;oMDI+NuBiz+8knmdVp6LP83jqtPm14s/1SDAZRtIjD/oXslCMOWMP0RhOLPiso0/zGpkckW8jj8yvMut4fuPP+RhB8A8vZA/FJ9njTqpkT/ndyuxHKmSP4NGKpg0xpM/a/yo60rylD8Mzboi7D6WP0lhBOOdppc/ql4GTPgcmT/D8ZAqLK+aP6bxN7+UTZw/zvnaikoCnj884hkwt9CfP84Sxrvi3qA/w+wxw+TjoT9o+n/GZ/eiPwcLw/g6IaQ/XS9Ty1phpT//mkaPhbmmP+4V9osBL6g/pXM+ZDTGqT/kn0rabHmrP7z3wCxVS60/MqKN6r5Brz9aE/zdL7OwP93ewvMr0bE/NbRFytf7sj93+vZp0Da0P04Gq6GPfrU/UVaUOETQtj8h8bJu1jK4P7hxKeojlbk/X6p9meoCuz+jJ+8r43G8P7r+SJIZ5b0/eULLSMVavz/pNNCz0GfAP98mKR/XI8E/xCkf2hzfwT9Zz/5/AJ3CP37jXMItXMM/1nxRjlkbxD+8m8kDUt7EP85gw8DBosU/Pw5LRAtrxj+lwXxr7jPHP1MNxaRe/8c/GIpLH8HMyD/6/+gP15zJPyA0X/B7b8o/gza6g5U+yz8EslqTOQrMP6WiPVEv1Mw/5w/yyV2dzT8OwXzNhGDOP9OzhCTEIM8/k2C0ZUbezz+3izK5YUzQP4CzKmhSptA//2rJdW4A0T9w7rzAu1nRPzz4FardsdE/a5T38cMJ0j/l9/HpYGPSP89NZBTSvNI/glz4/HcU0z9qPB35OGzTP1B3NtqewtM/MfYQsioX1D/WN+tcKWfUP/UtgwuusdQ/DRlxRl331D+zr25hoTXVPy/Gm6dRa9U/rwRyQIqZ1T8nFYNWQcLVPypEZ9FU4tU/Esg8Zkz81T/snd782BDWP7vRwRksH9Y/SMgbeaku1j8Qr7eNZj3WP/vMjRSITNY/WNSqcY5c1j9PDnxfB3DWP1qwKPAeh9Y/b27TY6mf1j9K7xDLcrzWP02gOQ3g2dY/Qu19Rj341j9ehWn/NBbXP12oUzO7Mdc/X+oP5HtM1z9n5vZpdGPXP00zMxbLd9c/Ng/o3M6G1z/N07Qb9pDXP+kKtprIlNc/YMfIrMeT1z8BzXNCv4/XPxv9P0Pyhdc/gdVkiON21z9Ox53LXmHXP8yjLP4RRtc/1D6UpMYj1z8bdxn+GPrWP9KGST9uydY/8+tCoLGT1j+diO5mJVXWP8AUJ7pSENY/uVHu9rrF1T9B4d2QJnXVP4IR/JDiHtU/m9H7mbfF1D+xmuXrEGrUP0YuDqX1CdQ/lkodbvao0z8patycX0XTP7M1ZUlj4dI/we1oicF70j85evUPuBPSP+lOlATSqNE/lAZtOIo70T+IfFequMzQP3yxmPuOWNA/sBzc54XFzz/eCeRwOdPOP0hKoFpv3M0/TMidp0jizD8Vwfn85OLLPzYqGdnt4so/ZzWSan7nyT+27S5mGPDIP5g1Mfvp+sc/cUW1Ep8Nxz/YREotjynGP3VKA8SETMU/orQnNop7xD/LtVMvA7TDP9x7eJ/s9sI/nFCIz3pCwj8USoQbe5PBP/wCGZ+l7MA/r9VBcp5MwD8YmngOfWK/P2ENmON6M74/hV1x2q8LvT/8bVN4S+a7P9e8oU6Tvbo/vMVwNtOYuT8o4qgjk3K4P56asNsYTbc/ntbWkeIrtj/89t5gfwq1P3C0iNnZ7rM/9/jriTHbsj8EPOkPU8uxP6wiEEUqyLA/DpHcEQuerz9wmM7vL8StP5g0ssXzBKw/zL0ObKldqj/eNORSxs+oPzsIydgtW6c/FhsYVEMBpj/4aOk+CrCkPwTcd6TMcqM/wBH7ux9Boj/8b+TwfyGhP/cNyjBdAqA/ix7CwsbenT9kPEKNVcCbP7/T/9pPqJk/15Hc9Qellz8URUEM96uVP0XARlh/zZM/i83dyH8Ikj9+XNAELGCQP9sJGEmjqY0/86laC9/Qij8MERKrNzeIP8GnYv5f9YU/hrOvJ+gIhD9+p6PnwlaCPzxV5rMQ7oA/JAV2I42Efz+1klGkQJt9Pz5GYf35Enw/mEStxZndej8f//6p5ux5P3s+RM7Ifnk/F2S8mfoUeT/zgOn6wMh4Pw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65251&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65252&quot;}},&quot;id&quot;:&quot;65229&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65171&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65160&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65163&quot;},{&quot;id&quot;:&quot;65167&quot;},{&quot;id&quot;:&quot;65227&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65164&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65216&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65218&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65175&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65152&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65156&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65154&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65158&quot;}},&quot;id&quot;:&quot;65151&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65251&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65203&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65231&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65160&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65163&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65191&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65194&quot;},{&quot;id&quot;:&quot;65198&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65195&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65232&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65237&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65206&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65183&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65187&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65185&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65189&quot;}},&quot;id&quot;:&quot;65182&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65220&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65165&quot;}},&quot;id&quot;:&quot;65164&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65229&quot;}},&quot;id&quot;:&quot;65233&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65173&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65158&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65174&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65225&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65164&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65167&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65226&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65237&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;65228&quot;}]},&quot;id&quot;:&quot;65227&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65200&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65165&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65214&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65202&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65174&quot;}},&quot;id&quot;:&quot;65170&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65168&quot;},{&quot;id&quot;:&quot;65169&quot;},{&quot;id&quot;:&quot;65170&quot;},{&quot;id&quot;:&quot;65171&quot;},{&quot;id&quot;:&quot;65172&quot;},{&quot;id&quot;:&quot;65173&quot;}]},&quot;id&quot;:&quot;65175&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;65151&quot;},{&quot;id&quot;:&quot;65182&quot;}]},&quot;id&quot;:&quot;65234&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65199&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65213&quot;}},&quot;id&quot;:&quot;65217&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65243&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65196&quot;}},&quot;id&quot;:&quot;65195&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65183&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65156&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65222&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;Gy/dJAaBlT+TGARWDi2yP8uhRbbz/cQ/BoGVQ4tsxz/hehSuR+HKP5MYBFYOLcI/ke18PzVeuj+4HoXrUbiuP/yp8dJNYqA/exSuR+F6dD/8qfHSTWKAP/yp8dJNYlA/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[12]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65225&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65226&quot;}},&quot;id&quot;:&quot;65213&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65215&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65245&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65192&quot;}},&quot;id&quot;:&quot;65191&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65243&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65213&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65214&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65215&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65217&quot;}},&quot;id&quot;:&quot;65216&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;65216&quot;}]},&quot;id&quot;:&quot;65228&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65252&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65229&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65230&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65231&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65233&quot;}},&quot;id&quot;:&quot;65232&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65204&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65172&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65199&quot;},{&quot;id&quot;:&quot;65200&quot;},{&quot;id&quot;:&quot;65201&quot;},{&quot;id&quot;:&quot;65202&quot;},{&quot;id&quot;:&quot;65203&quot;},{&quot;id&quot;:&quot;65204&quot;}]},&quot;id&quot;:&quot;65206&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65191&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65194&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65195&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65198&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65218&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65161&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65196&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65154&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65245&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65222&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65161&quot;}},&quot;id&quot;:&quot;65160&quot;,&quot;type&quot;:&quot;LinearAxis&quot;}],&quot;root_ids&quot;:[&quot;65234&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"ec1bc67a-986d-4ef0-aac0-183389537745","root_ids":["65234"],"roots":{"65234":"8300668b-0e5c-449f-9068-2eea5a25bec9"}}];
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