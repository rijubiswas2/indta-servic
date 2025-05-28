function contactService(service) { const number = '919332446037'; const message = encodeURIComponent(Hi, I want to buy: ${service}); const url = https://wa.me/${number}?text=${message}; window.open(url, '_blank'); }

function loadService(type) { const container = document.getElementById('service-container'); let html = '';

if (type === 'instagram') { html += ` <div class="card"> <h3>Instagram Views 😍</h3> <div class="price-row"><span>10k</span><span>40₹</span><button onclick="contactService('Instagram Views 10k')">BUY NOW</button></div> <div class="price-row"><span>50k</span><span>100₹</span><button onclick="contactService('Instagram Views 50k')">BUY NOW</button></div> <div class="price-row"><span>1M</span><span>300₹</span><button onclick="contactService('Instagram Views 1M')">BUY NOW</button></div> </div>

<div class="card">
    <h3>Instagram Likes 😍</h3>
    <div class="price-row"><span>1k</span><span>10₹</span><button onclick="contactService('Instagram Likes 1k')">BUY NOW</button></div>
    <div class="price-row"><span>5k</span><span>40₹</span><button onclick="contactService('Instagram Likes 5k')">BUY NOW</button></div>
    <div class="price-row"><span>10k</span><span>70₹</span><button onclick="contactService('Instagram Likes 10k')">BUY NOW</button></div>
  </div>

  <div class="card">
    <h3>Instagram Story Views 😍</h3>
    <div class="price-row"><span>1k</span><span>20₹</span><button onclick="contactService('Instagram Story Views 1k')">BUY NOW</button></div>
    <div class="price-row"><span>5k</span><span>100₹</span><button onclick="contactService('Instagram Story Views 5k')">BUY NOW</button></div>
    <div class="price-row"><span>10k</span><span>200₹</span><button onclick="contactService('Instagram Story Views 10k')">BUY NOW</button></div>
  </div>

  <div class="card">
    <h3>Instagram Followers 🧑‍🤝‍🧑</h3>
    <div class="price-row"><span>1k</span><span>160₹</span><button onclick="contactService('Instagram Followers 1k')">BUY NOW</button></div>
    <div class="price-row"><span>2k</span><span>300₹</span><button onclick="contactService('Instagram Followers 2k')">BUY NOW</button></div>
    <div class="price-row"><span>5k</span><span>750₹</span><button onclick="contactService('Instagram Followers 5k')">BUY NOW</button></div>
  </div>
`;

} else if (type === 'facebook') { html += ` <div class="card"> <h3>Facebook Followers 🧑‍🤝‍🧑</h3> <div class="price-row"><span>1k</span><span>100₹</span><button onclick="contactService('Facebook Followers 1k')">BUY NOW</button></div> <div class="price-row"><span>5k</span><span>450₹</span><button onclick="contactService('Facebook Followers 5k')">BUY NOW</button></div> <div class="price-row"><span>10k</span><span>900₹</span><button onclick="contactService('Facebook Followers 10k')">BUY NOW</button></div> </div>

<div class="card">
    <h3>Facebook Views 😍</h3>
    <div class="price-row"><span>1k</span><span>10₹</span><button onclick="contactService('Facebook Views 1k')">BUY NOW</button></div>
    <div class="price-row"><span>5k</span><span>50₹</span><button onclick="contactService('Facebook Views 5k')">BUY NOW</button></div>
    <div class="price-row"><span>10k</span><span>90₹</span><button onclick="contactService('Facebook Views 10k')">BUY NOW</button></div>
  </div>
`;

} else if (type === 'youtube') { html += <div class="card"> <h3>YouTube Views 🎥</h3> <div class="price-row"><span>1k</span><span>250₹</span><button onclick="contactService('YouTube Views 1k')">BUY NOW</button></div> <div class="price-row"><span>5k</span><span>1200₹</span><button onclick="contactService('YouTube Views 5k')">BUY NOW</button></div> </div>; }

container.innerHTML = html; }
