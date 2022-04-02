import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
window.Stimulus = Application.start()

Stimulus.register("email_list", class extends Controller {
  static targets = [ "theLink" ]

  activated(event) {
    let allATags = this.element.getElementsByTagName('a');
    let l = allATags.length;
    for (var i = 0; i < l; i++) {
      allATags[i].classList.remove('active');
    }
    const target = event.target;
    target.classList.add('active');
  }

  connect() {
    console.log('controller email_list connected');
  }
})
