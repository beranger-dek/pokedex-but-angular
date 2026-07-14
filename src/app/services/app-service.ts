import { Service, signal } from '@angular/core';

@Service()
export class AppService {
    mySignal = signal(42)

    modifierLeSignal() {
        this.mySignal.update(old => old + 1)
    }
}
