const Notifyer = {

  async init() {
    
    if (!Notification) {
      console.log('Esse browser não suporta notificações desktop');
    } else {
      const permission = await Notification.requestPermission()
        if(permission !== "granted") {
          throw new Error('Permissão negada')
        }
      }
  },
  

  notify({ title, body, icon }) {
    
    new Notification(title, {
      body,
      icon
    })
    
  }

}
export { Notifyer }