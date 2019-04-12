import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPlaidLinkButtonComponent } from './ngx-plaid-link-button.component';
import { NgxPlaidLinkService } from './ngx-plaid-link.service';
import {
  PlaidSuccessMetadata,
  PlaidOnSuccessArgs,
  PlaidInstitutionObject,
  PlaidAccountObject,
  PlaidErrorObject,
  PlaidErrorMetadata,
  PlaidOnExitArgs,
  PlaidOnEventArgs,
  PlaidEventMetadata,
  PlaidConfig,
} from './interfaces';
import { PlaidLinkHandler } from './ngx-plaid-link-handler'

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NgxPlaidLinkService
  ],
  declarations: [NgxPlaidLinkButtonComponent],
  exports: [NgxPlaidLinkButtonComponent]
})
export class NgxPlaidLinkModule { }
