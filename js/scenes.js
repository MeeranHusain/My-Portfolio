/* Three.js scenes (hero, experience, projects, certifications) */
(function () {
  var T = window.THREE,
    root = document.documentElement,
    reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  /* ---------- three.js scenes ---------- */
  if (!T) return;
  function col() {
    var v = getComputedStyle(root).getPropertyValue("--accent-text").trim();
    return new T.Color(v || "#39FF88");
  }
  var C = col(),
    mats = [],
    M = { cx: innerWidth / 2, cy: innerHeight / 2 };
  function wm(o) {
    var m = new T.MeshBasicMaterial({
      color: C,
      wireframe: true,
      transparent: true,
      opacity: o,
    });
    mats.push(m);
    return m;
  }
  function lm(o) {
    var m = new T.LineBasicMaterial({
      color: C,
      transparent: true,
      opacity: o,
    });
    mats.push(m);
    return m;
  }
  function pm(s, o) {
    var m = new T.PointsMaterial({
      color: C,
      size: s,
      transparent: true,
      opacity: o,
    });
    mats.push(m);
    return m;
  }
  function sm(o) {
    var m = new T.MeshBasicMaterial({
      color: C,
      transparent: true,
      opacity: o,
    });
    mats.push(m);
    return m;
  }
  addEventListener(
    "pointermove",
    function (e) {
      M.cx = e.clientX;
      M.cy = e.clientY;
    },
    { passive: true },
  );
  function rnd(a) {
    return (Math.random() - 0.5) * a;
  }
  var B = {
    hero: function (S) {
      var k = new T.Mesh(new T.TorusKnotGeometry(2.2, 0.6, 120, 16), wm(0.32));
      k.position.z = -2;
      S.add(k);
      var n = innerWidth < 700 ? 350 : 900,
        p = new Float32Array(n * 3),
        i;
      for (i = 0; i < n; i++) {
        p[i * 3] = rnd(26);
        p[i * 3 + 1] = rnd(14);
        p[i * 3 + 2] = rnd(10) - 2;
      }
      var g = new T.BufferGeometry();
      g.setAttribute("position", new T.BufferAttribute(p, 3));
      var q = new T.Points(g, pm(0.06, 0.7));
      S.add(q);
      return function (t, x, y, a) {
        k.position.x = a < 1.2 ? 0 : 3.4;
        k.rotation.x = t * 0.18 + y * 0.8;
        k.rotation.y = t * 0.28 + x * 1.2;
        q.rotation.y = t * 0.03 + x * 0.15;
        q.rotation.x = y * 0.1;
        q.position.y = scrollY * 0.004;
      };
    },
    experience: function (S) {
      var G = new T.Group(),
        ico = new T.Mesh(new T.IcosahedronGeometry(1.7, 1), wm(0.3)),
        ring = new T.Group(),
        o = [],
        i;
      ring.add(new T.Mesh(new T.TorusGeometry(3, 0.02, 8, 120), wm(0.5)));
      for (i = 0; i < 3; i++) {
        var s = new T.Mesh(new T.SphereGeometry(0.17, 14, 14), sm(0.85));
        ring.add(s);
        o.push(s);
      }
      G.add(ico, ring);
      S.add(G);
      return function (t, x, y, a) {
        G.position.x = a < 1.2 ? 0 : 4.6;
        G.position.y = -0.5;
        ico.rotation.x = t * 0.25 + y;
        ico.rotation.y = t * 0.2 + x;
        ring.rotation.x = 1.1 + y * 0.8;
        ring.rotation.y = t * 0.15 + x * 1.2;
        o.forEach(function (s, i) {
          var an = t * (0.6 + i * 0.25) + i * 2.1;
          s.position.set(Math.cos(an) * 3, Math.sin(an) * 3, 0);
        });
      };
    },
    projects: function (S) {
      var ge = new T.EdgesGeometry(new T.BoxGeometry(1, 1, 1)),
        L = [],
        i;
      for (i = 0; i < 24; i++) {
        var l = new T.LineSegments(ge, lm(0.4)),
          s = 0.4 + Math.random() * 0.9;
        l.scale.set(s, s, s);
        l.userData = {
          bx: rnd(18),
          by: rnd(8.5),
          z: -Math.random() * 3,
          r: Math.random() * 0.5 + 0.15,
        };
        S.add(l);
        L.push(l);
      }
      return function (t, x, y, a) {
        var mx = x * 8.4 * a,
          my = -y * 8.4;
        L.forEach(function (l) {
          var u = l.userData,
            dx = u.bx - mx,
            dy = u.by - my,
            di = Math.hypot(dx, dy) || 1,
            pu = Math.max(0, 3.2 - di) / 3.2;
          l.position.set(
            u.bx + (dx / di) * pu * 1.8,
            u.by + (dy / di) * pu * 1.8 + Math.sin(t * 0.6 + u.bx) * 0.25,
            u.z,
          );
          l.rotation.x = t * u.r + pu * 2;
          l.rotation.y = t * u.r * 0.8;
        });
      };
    },
    certifications: function (S) {
      var N = 46,
        p = new Float32Array(N * N * 3),
        i,
        j;
      for (i = 0; i < N; i++)
        for (j = 0; j < N; j++) {
          p[(i * N + j) * 3] = (i - N / 2) * 0.55;
          p[(i * N + j) * 3 + 2] = (j - N / 2) * 0.55;
        }
      var g = new T.BufferGeometry(),
        at = new T.BufferAttribute(p, 3);
      g.setAttribute("position", at);
      var q = new T.Points(g, pm(0.07, 0.75));
      q.rotation.x = -0.75;
      q.position.y = -1.8;
      S.add(q);
      var oc = new T.Mesh(new T.OctahedronGeometry(1.3, 0), wm(0.5));
      S.add(oc);
      return function (t, x, y, a) {
        oc.position.set(a < 1.2 ? 0 : 4.8, 1.6, 0);
        oc.rotation.y = t * 0.5 + x * 2;
        oc.rotation.x = t * 0.3 + y * 2;
        var mx = x * 20,
          mz = y * 14,
          k,
          px,
          pz,
          di;
        for (k = 0; k < N * N; k++) {
          px = p[k * 3];
          pz = p[k * 3 + 2];
          di = Math.hypot(px - mx, pz - mz);
          p[k * 3 + 1] =
            Math.sin(px * 0.6 + t * 1.2) * 0.35 +
            Math.cos(pz * 0.6 + t) * 0.35 +
            Math.exp(-di * 0.35) * Math.sin(di * 1.8 - t * 4) * 0.9;
        }
        at.needsUpdate = true;
      };
    },
  };
  var scenes = [];
  [
    ["hero", ".hero"],
    ["experience", "#experience"],
    ["projects", "#projects"],
    ["certifications", "#certifications"],
  ].forEach(function (d) {
    var el = document.querySelector(d[1]);
    if (!el) return;
    var cv = el.querySelector("canvas.gl,#gl");
    if (!cv) {
      cv = document.createElement("canvas");
      cv.className = "gl";
      cv.setAttribute("aria-hidden", "true");
      el.insertBefore(cv, el.firstChild);
    }
    var rd;
    try {
      rd = new T.WebGLRenderer({ canvas: cv, alpha: true, antialias: true });
    } catch (e) {
      return;
    }
    rd.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    var sc = new T.Scene(),
      cam = new T.PerspectiveCamera(50, 1, 0.1, 100);
    cam.position.z = 9;
    var s = {
      el: el,
      rd: rd,
      sc: sc,
      cam: cam,
      x: 0,
      y: 0,
      a: 1,
      vis: true,
      upd: B[d[0]](sc),
    };
    scenes.push(s);
    function size() {
      var w = el.clientWidth,
        h = el.clientHeight;
      if (!w || !h || (w === s.pw && h === s.ph)) return;
      s.pw = w;
      s.ph = h;
      rd.setSize(w, h, false);
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
      s.a = w / h;
      if (reduce) {
        s.upd(0, 0, 0, s.a);
        rd.render(sc, cam);
      }
    }
    if (window.ResizeObserver) new ResizeObserver(size).observe(el);
    else addEventListener("resize", size);
    size();
    if (!reduce && window.IntersectionObserver)
      new IntersectionObserver(function (e) {
        s.vis = e[0].isIntersecting;
      }).observe(el);
  });
  if (reduce || !scenes.length) return;
  var f = 0;
  (function loop(t) {
    requestAnimationFrame(loop);
    if (document.hidden) return;
    t *= 0.001;
    if (++f % 40 === 0) {
      C = col();
      mats.forEach(function (m) {
        m.color.copy(C);
      });
    }
    scenes.forEach(function (s) {
      if (!s.vis) return;
      var b = s.el.getBoundingClientRect();
      s.x += ((M.cx - b.left) / b.width - 0.5 - s.x) * 0.06;
      s.y += ((M.cy - b.top) / b.height - 0.5 - s.y) * 0.06;
      s.upd(t, s.x, s.y, s.a);
      s.rd.render(s.sc, s.cam);
    });
  })(0);
})();
