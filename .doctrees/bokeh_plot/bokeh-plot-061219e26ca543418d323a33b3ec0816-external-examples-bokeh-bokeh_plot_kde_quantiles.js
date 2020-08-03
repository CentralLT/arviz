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
    
      
      
    
      var element = document.getElementById("98ed204a-994b-4a20-a4db-932994227f45");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '98ed204a-994b-4a20-a4db-932994227f45' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;9ec4e887-a64b-483f-8395-ae7019092b45&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;3h4LGRiw3j/V5xdQY+/eP8ywJIeuLt8/w3kxvvlt3z+6Qj71RK3fP7ELSyyQ7N8/VOqrse0V4D/QTjJNkzXgP0uzuOg4VeA/xhc/hN504D9CfMUfhJTgP77gS7sptOA/OUXSVs/T4D+0qVjydPPgPzAO340aE+E/rHJlKcAy4T8n1+vEZVLhP6I7cmALcuE/HqD4+7CR4T+aBH+XVrHhPxVpBTP80OE/kM2LzqHw4T8MMhJqRxDiP4iWmAXtL+I/A/seoZJP4j9+X6U8OG/iP/rDK9jdjuI/+sMr2N2O4j/6wyvY3Y7iP35fpTw4b+I/A/seoZJP4j+IlpgF7S/iPwwyEmpHEOI/kM2LzqHw4T8VaQUz/NDhP5oEf5dWseE/HqD4+7CR4T+iO3JgC3LhPyfX68RlUuE/rHJlKcAy4T8wDt+NGhPhP7SpWPJ08+A/OUXSVs/T4D++4Eu7KbTgP0J8xR+ElOA/xhc/hN504D9Ls7joOFXgP9BOMk2TNeA/VOqrse0V4D+xC0sskOzfP7pCPvVErd8/w3kxvvlt3z/MsCSHri7fP9XnF1Bj794/3h4LGRiw3j/eHgsZGLDePw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[56]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX5lGe4nOBEBfmUZ7ic4EQOlljRaFsQRAIAhoF5+RBEDL7HS+JG8EQGV0AvXeSgRAvd3Ec88kBEDHQgeIofwDQNG8gAQX1QNASK8FnIurA0C95YmLqIADQLsewjt6VQNAwXe6SmwrA0ASQ6gGHwEDQHH33LZg2AJAPjWrGyyvAkAI2fu+j4YCQNJxFP9bXgJAY3fnImU4AkA9uLThmRACQAvTGWVI6QFAgv9f9b/AAUBah3d5BZgBQCmHQipMbgFAYjW/wYRFAUARAeXPNxsBQFXTBh458ABAAmsGJPDDAEAAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[56]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67604&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67605&quot;}},&quot;id&quot;:&quot;67579&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;diiyc4Ou4j/xjDgPKc7iP2zxvqrO7eI/6FVFRnQN4z9kusvhGS3jP98eUn2/TOM/WoPYGGVs4z/W5160CozjP1JM5U+wq+M/zbBr61XL4z9IFfKG++rjP8R5eCKhCuQ/QN7+vUYq5D+7QoVZ7EnkPzanC/WRaeQ/sguSkDeJ5D8ucBgs3ajkP6nUnseCyOQ/JDklYyjo5D+gnav+zQflPxwCMppzJ+U/l2a4NRlH5T8Syz7RvmblP44vxWxkhuU/CpRLCAqm5T8KlEsICqblPwqUSwgKpuU/ji/FbGSG5T8Syz7RvmblP5dmuDUZR+U/HAIymnMn5T+gnav+zQflPyQ5JWMo6OQ/qdSex4LI5D8ucBgs3ajkP7ILkpA3ieQ/NqcL9ZFp5D+7QoVZ7EnkP0De/r1GKuQ/xHl4IqEK5D9IFfKG++rjP82wa+tVy+M/UkzlT7Cr4z/W5160CozjP1qD2BhlbOM/3x5Sfb9M4z9kusvhGS3jP+hVRUZ0DeM/bPG+qs7t4j/xjDgPKc7iP3YosnODruI/diiyc4Ou4j8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[52]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJ8ESUeAgDQInwRJR4CANAnrBWfyVJA0BpE3Fj5YkDQC/DLT1BygNAKVD3tz8JBECa08a7CUYEQOqtvv2+fgRAzagLj3e0BEDLcFc/QuMEQDT0kN/rCwVADKLPCSktBUAXppQVQEgFQJqWJcIrXAVARcQny71oBUA6yP8F5W8FQIh8USemcQVAuZ87i/ptBUB96901dGUFQBw7Le0ZWwVAFRTK+dVNBUAKhPVqoD4FQHDHyLptLAVAdDwVtfYWBUDWWIdbXgAFQBKHl4SC6QRAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[52]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67606&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67607&quot;}},&quot;id&quot;:&quot;67584&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67563&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67581&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67548&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67586&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67560&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67579&quot;}},&quot;id&quot;:&quot;67583&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67555&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67598&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67548&quot;}},&quot;id&quot;:&quot;67547&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67579&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67580&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67581&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67583&quot;}},&quot;id&quot;:&quot;67582&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67561&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67558&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67585&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67564&quot;}},&quot;id&quot;:&quot;67559&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67539&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;hfjRo6/F5T8AXVg/VeXlP3zB3tr6BOY/+CVldqAk5j9yiusRRkTmP+7uca3rY+Y/alP4SJGD5j/mt37kNqPmP2AcBYDcwuY/3ICLG4Li5j9Y5RG3JwLnP9RJmFLNIec/Tq4e7nJB5z/KEqWJGGHnP0Z3KyW+gOc/wtuxwGOg5z88QDhcCcDnP7ikvveu3+c/NAlFk1T/5z+wbcsu+h7oPyrSUcqfPug/pjbYZUVe6D8im14B633oP57/5JyQneg/GGRrODa96D+UyPHT29zoPxAteG+B/Og/jJH+Cicc6T8G9oSmzDvpP4JaC0JyW+k//r6R3Rd76T96Ixh5vZrpP/SHnhRjuuk/cOwksAja6T/sUKtLrvnpP2i1MedTGeo/4hm4gvk46j9efj4en1jqP9rixLlEeOo/VkdLVeqX6j/Qq9Hwj7fqP0wQWIw11+o/yHTeJ9v26j9E2WTDgBbrP749614mNus/OqJx+stV6z+2BviVcXXrPzJrfjEXles/rM8Ezby06z8oNItoYtTrP6SYEQQI9Os/IP2Xn60T7D+aYR47UzPsPxbGpNb4Uuw/kiorcp5y7D8Oj7ENRJLsP4jzN6npsew/BFi+RI/R7D+AvETgNPHsP/wgy3vaEO0/doVRF4Aw7T/y6deyJVDtP25OXk7Lb+0/6rLk6XCP7T9kF2uFFq/tP+B78SC8zu0/XOB3vGHu7T/YRP5XBw7uP1KphPOsLe4/zg0Lj1JN7j9KcpEq+GzuP8XWF8adjO4/xdYXxp2M7j/F1hfGnYzuP0pykSr4bO4/zg0Lj1JN7j9SqYTzrC3uP9hE/lcHDu4/XOB3vGHu7T/ge/EgvM7tP2QXa4UWr+0/6rLk6XCP7T9uTl5Oy2/tP/Lp17IlUO0/doVRF4Aw7T/8IMt72hDtP4C8ROA08ew/BFi+RI/R7D+I8zep6bHsPw6PsQ1Ekuw/kiorcp5y7D8WxqTW+FLsP5phHjtTM+w/IP2Xn60T7D+kmBEECPTrPyg0i2hi1Os/rM8Ezby06z8ya34xF5XrP7YG+JVxdes/OqJx+stV6z++PeteJjbrP0TZZMOAFus/yHTeJ9v26j9MEFiMNdfqP9Cr0fCPt+o/VkdLVeqX6j/a4sS5RHjqP15+Ph6fWOo/4hm4gvk46j9otTHnUxnqP+xQq0uu+ek/cOwksAja6T/0h54UY7rpP3ojGHm9muk//r6R3Rd76T+CWgtCclvpPwb2hKbMO+k/jJH+Cicc6T8QLXhvgfzoP5TI8dPb3Og/GGRrODa96D+e/+SckJ3oPyKbXgHrfeg/pjbYZUVe6D8q0lHKnz7oP7Btyy76Hug/NAlFk1T/5z+4pL73rt/nPzxAOFwJwOc/wtuxwGOg5z9GdyslvoDnP8oSpYkYYec/Tq4e7nJB5z/USZhSzSHnP1jlEbcnAuc/3ICLG4Li5j9gHAWA3MLmP+a3fuQ2o+Y/alP4SJGD5j/u7nGt62PmP3KK6xFGROY/+CVldqAk5j98wd7a+gTmPwBdWD9V5eU/hfjRo6/F5T+F+NGjr8XlPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[146]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGUR1HBaZqD8ZRHUcFpmoP6PKYG8fzqg/5InKbjGBqT8yKtm8C1GqP8nVWmR9oKs/RjW1D8lDrT9OHV2YP3+vP7ILEVP/ErE/PoQTfFm8sj+iD2U7y660P3Mi1zrd97Y/Mte4S3CUuT+KPuMY76+8P0yvLS4iE8A/RE6oUq/7wT8clWFALCLEP0q7+l9nesY/nRu1mUz7yD+t7G50JLrLP0jeclsQrM4/uH8Bw1Dm0D/3ofvOvIzSP0Bko6WjS9Q/AkUBkwod1j8yjvnzsADYP+pdYtkP/tk/5IDIuMAL3D9Y1PBjyDHePxn2gSoyMOA/MkV2l+BP4T+5VAD64nHiP2IZj79+l+M/OhUFsoa95D++3DSh8OTlPzK5ZXI7C+c/+f3cS9cv6D8ZYUYEWVLpP4vVt7Bydeo/TTmnGjaZ6z8/pZSfQbvsP1s7Mirq5e0/ufi7j0IU7z+GuOwiISbwP98Rp+Ucx/A/GkysXG5v8T9Jl7odMyLyP87lQC0q3fI/xhT9rq6g8z+gG0vY6HD0P2/Q6FLNSPU/3mWuWGwt9j+r1ujgYhj3Pw+898OCCvg/JNn9ZfEB+T+tL5f46Pv5P2Xq0VC/8Po/BBv7nBzj+z8a1eRBkM38P9tvt/dSsf0/GKr8nJ+H/j/C2MSP0lT/P44bmR+ACABA/ghB3hdiAEAAB9RLA7UAQJMbyg3JAQFAzIn0MulIAUDza39y6owBQFRNoOnTzAFAZIFDxegLAkAALQ6j9EkCQB7jE3RRiQJAIU6GYfXHAkAAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[146]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67608&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67609&quot;}},&quot;id&quot;:&quot;67589&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67552&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67541&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67591&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67584&quot;}},&quot;id&quot;:&quot;67588&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67608&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67609&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67584&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67585&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67586&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67588&quot;}},&quot;id&quot;:&quot;67587&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;67565&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;67555&quot;},{&quot;id&quot;:&quot;67556&quot;},{&quot;id&quot;:&quot;67557&quot;},{&quot;id&quot;:&quot;67558&quot;},{&quot;id&quot;:&quot;67559&quot;},{&quot;id&quot;:&quot;67560&quot;},{&quot;id&quot;:&quot;67561&quot;},{&quot;id&quot;:&quot;67562&quot;}]},&quot;id&quot;:&quot;67612&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67564&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67556&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67602&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67603&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67551&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;67554&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67590&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;67612&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;67613&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67563&quot;}},&quot;id&quot;:&quot;67557&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;67562&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67589&quot;}},&quot;id&quot;:&quot;67593&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67547&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;67550&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67589&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67590&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67591&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67593&quot;}},&quot;id&quot;:&quot;67592&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67596&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67552&quot;}},&quot;id&quot;:&quot;67551&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;67594&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67574&quot;}},&quot;id&quot;:&quot;67578&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67604&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;67547&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;67550&quot;},{&quot;id&quot;:&quot;67554&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;67551&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;67577&quot;},{&quot;id&quot;:&quot;67582&quot;},{&quot;id&quot;:&quot;67587&quot;},{&quot;id&quot;:&quot;67592&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;67594&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;67565&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;67539&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;67543&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;67541&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;67545&quot;}},&quot;id&quot;:&quot;67538&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67605&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67574&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67575&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67576&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67578&quot;}},&quot;id&quot;:&quot;67577&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67596&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67543&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;67538&quot;},0,0]]},&quot;id&quot;:&quot;67611&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67606&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;67555&quot;},{&quot;id&quot;:&quot;67556&quot;},{&quot;id&quot;:&quot;67557&quot;},{&quot;id&quot;:&quot;67558&quot;},{&quot;id&quot;:&quot;67559&quot;},{&quot;id&quot;:&quot;67560&quot;},{&quot;id&quot;:&quot;67561&quot;},{&quot;id&quot;:&quot;67562&quot;}]},&quot;id&quot;:&quot;67565&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67545&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67575&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67607&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;67613&quot;},{&quot;id&quot;:&quot;67611&quot;}]},&quot;id&quot;:&quot;67614&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67580&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;Fut+gofLxz8EfZjwHUrIP/IOsl60yMg/4KDLzEpHyT/OMuU64cXJP7zE/qh3RMo/qlYYFw7Dyj+Y6DGFpEHLP4Z6S/M6wMs/dAxlYdE+zD9inn7PZ73MP1AwmD3+O80/PsKxq5S6zT8sVMsZKznOPxrm5IfBt84/CHj+9Vc2zz/2CRhk7rTPP/LNGGnCGdA/6ZYloA1Z0D/gXzLXWJjQP9coPw6k19A/zvFLRe8W0T/Fulh8OlbRP7yDZbOFldE/s0xy6tDU0T+qFX8hHBTSP6Hei1hnU9I/mKeYj7KS0j+PcKXG/dHSP4Y5sv1IEdM/fQK/NJRQ0z90y8tr34/TP2uU2KIqz9M/Yl3l2XUO1D9YJvIQwU3UP1Dv/kcMjdQ/RrgLf1fM1D8+gRi2ogvVPzRKJe3tStU/LBMyJDmK1T8i3D5bhMnVPxqlS5LPCNY/EG5YyRpI1j8IN2UAZofWP/7/cTexxtY/9sh+bvwF1z/skYulR0XXP+RamNyShNc/2iOlE97D1z/S7LFKKQPYP8i1voF0Qtg/wH7LuL+B2D+2R9jvCsHYP64Q5SZWANk/pNnxXaE/2T+cov6U7H7ZP5JrC8w3vtk/ijQYA4P92T+A/SQ6zjzaP3jGMXEZfNo/bo8+qGS72j9mWEvfr/raP1whWBb7Ods/VOpkTUZ52z9Ks3GEkbjbP0F8frvc99s/OEWL8ic33D8vDpgpc3bcPybXpGC+tdw/HaCxlwn13D8Uab7OVDTdPwsyywWgc90/AvvXPOuy3T/5w+RzNvLdP/CM8aqBMd4/51X+4cxw3j/nVf7hzHDeP+dV/uHMcN4/8IzxqoEx3j/5w+RzNvLdPwL71zzrst0/CzLLBaBz3T8Uab7OVDTdPx2gsZcJ9dw/JtekYL613D8vDpgpc3bcPzhFi/InN9w/QXx+u9z32z9Ks3GEkbjbP1TqZE1Geds/XCFYFvs52z9mWEvfr/raP26PPqhku9o/eMYxcRl82j+A/SQ6zjzaP4o0GAOD/dk/kmsLzDe+2T+cov6U7H7ZP6TZ8V2hP9k/rhDlJlYA2T+2R9jvCsHYP8B+y7i/gdg/yLW+gXRC2D/S7LFKKQPYP9ojpRPew9c/5FqY3JKE1z/skYulR0XXP/bIfm78Bdc//v9xN7HG1j8IN2UAZofWPxBuWMkaSNY/GqVLks8I1j8i3D5bhMnVPywTMiQ5itU/NEol7e1K1T8+gRi2ogvVP0a4C39XzNQ/UO/+RwyN1D9YJvIQwU3UP2Jd5dl1DtQ/a5TYoirP0z90y8tr34/TP30CvzSUUNM/hjmy/UgR0z+PcKXG/dHSP5inmI+yktI/od6LWGdT0j+qFX8hHBTSP7NMcurQ1NE/vINls4WV0T/Fulh8OlbRP87xS0XvFtE/1yg/DqTX0D/gXzLXWJjQP+mWJaANWdA/8s0YacIZ0D/2CRhk7rTPPwh4/vVXNs8/Gubkh8G3zj8sVMsZKznOPz7CsauUus0/UDCYPf47zT9inn7PZ73MP3QMZWHRPsw/hnpL8zrAyz+Y6DGFpEHLP6pWGBcOw8o/vMT+qHdEyj/OMuU64cXJP+Cgy8xKR8k/8g6yXrTIyD8EfZjwHUrIPxbrfoKHy8c/Fut+gofLxz8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[154]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHLibvLZcAQEcuJu8tlwBAdzsW4CFoAECy9R/EWDgAQFMng+NVBgBA4qgi+6Wh/z/qWRnsoTL/P1B3NDxmvP4/xyMFqeU+/j+WxpTpyLb9P9vY/5egJf0/eJPuZLWN/D8HD38WJuv7P5EcNzaQP/s/Mq8NJr+Q+j99wHuNUdv5PyCxLmeSHvk/fhW0XG1g+D8KJfGqhqL3P8Eof5675PY/yI0Etvkp9j9k3TjZNG/1P3YAPKVSt/Q/J8MOR4AE9D9Vcv6m1lbzP8Js7N8LrPI/RW3lQ20G8j9XlmK/GmTxP+ftjy4yxPA/vxoA85Mo8D+xxGoBWR7vP7MH3mWm8u0/kFSCncPN7D9BVv6y06nrP3QbaqFcieo/m8K4IfJr6T/Udg/8JlXoPyzC2UGdQ+c/7ZDm0as85j+EDfqwojvlPxLs/fJOPOQ/fI/WEW1K4z+dtmLd71ziP+M0Ocoxd+E/q36S55ia4D8Dn/5uNoXfP9y4GTUB4t0/fbPLNydO3D/97qAo0MnaPzbE0LqiT9k/JKCi0rnf1z8IHKrDjnzWP4oOaqBeJNU//5C8jYrV0z/bmU0nUpLSP+QAZzMgWtE/L6fX7R8q0D+keuRmegbOP82Gc8pn1Ms/9R9btPi8yT+v978oXLnHP9QpJZvhycU/f02ofg4AxD9benKqJkjCP9L8xyLEq8A/7u7iRq93vj98kFEXZcG7P8uL8WYPQLk/PaC4HHUPtz++z2BawA+1P9f6rkBYX7M/fQ4dAaztsT9oRojkXL6wPyWEQ88Vr68/1sy2YCxHrj/mQc9h6ICtPxfaAfirPq0/AAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[154]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67602&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67603&quot;}},&quot;id&quot;:&quot;67574&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67576&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67598&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;}],&quot;root_ids&quot;:[&quot;67614&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"9ec4e887-a64b-483f-8395-ae7019092b45","root_ids":["67614"],"roots":{"67614":"98ed204a-994b-4a20-a4db-932994227f45"}}];
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