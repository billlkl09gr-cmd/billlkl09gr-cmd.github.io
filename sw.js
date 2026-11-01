self.addEventListener('push',e=>{const d=e.data?e.data.json():{},call=d.tag=='call';
e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{if(l.some(c=>c.visibilityState=='visible'))return;
return self.registration.showNotification(d.title||'Airsoft Hub',{body:d.body||'',tag:d.tag||'x',renotify:true,requireInteraction:call,vibrate:call?[400,200,400,200,400]:[100]})}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>l[0]?l[0].focus():clients.openWindow('./')))});
