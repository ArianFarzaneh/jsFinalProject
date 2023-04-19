//other version
  const route = (event) => {
  event = event || window.event;
    window.history.pushState({}, "", event.target.href);
    handleLocation();
  };
  
  const routes = {
    "/":"/src/pages/welcomePage.html",
    404:"/src/pages/404.html",
    "/login": "/src/pages/login.html",
    "/products":"/src/pages/products.html",
    "/card":"/src/pages/card.html",
    "/nike":"src/pages/brandsPage/nike.html",
    "/adidas":"src/pages/brandsPage/adidas.html",
    "/puma":"src/pages/brandsPage/puma.html",
    "/asics":"src/pages/brandsPage/asics.html",
    "/newbalance":"src/pages/brandsPage/newbalance.html",
    "/converse":"src/pages/brandsPage/converse.html"
  };
  
  const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById('app').innerHTML = html;
  };
  
  window.onpopstate = handleLocation;
  window.route = route;
  
  handleLocation();