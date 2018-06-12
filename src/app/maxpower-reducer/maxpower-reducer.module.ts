import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { DashboardReducer } from './reducers/dashboard-reducer';
import { DashboardEffectService } from './effects/dashboard-effect.service';
import { MemberReducer } from './reducers/member-reducer';
import { MemberEffectService } from './effects/member-effect.service';
import { MemberProfileReducer } from './reducers/member-profile-reducer';
import { MemberProfileEffectService } from './effects/member-profile-effect.service';
import { SwalReducer } from './reducers/swal-reducer';
import { SwalEffectsService } from './effects/swal-effects.service';
import { ModalEffectsService } from './effects/modal-effects.service';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalReducer } from './reducers/modal-reducer';
import { EarningsReducer } from './reducers/earnings-reducer';
import { EarningsEffectService } from './effects/earnings-effect.service';
import { LoginReducer } from './reducers/login-reducer';
import { LoginEffectService } from './effects/login-effect.service';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({
      dashboard: DashboardReducer,
      members: MemberReducer,
      member: MemberProfileReducer,
      swal: SwalReducer,
      modal: ModalReducer,
      earnings: EarningsReducer,
      login:LoginReducer
    }),
    EffectsModule.forRoot([
      DashboardEffectService,
      MemberEffectService,
      MemberProfileEffectService,
      SwalEffectsService,
      ModalEffectsService,
      EarningsEffectService,
      LoginEffectService
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })

  ],
  declarations: []
})
export class MaxpowerReducerModule { }
