import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'purchase-tokens',
  templateUrl: './purchase-tokens.component.html',
  styleUrls: ['./purchase-tokens.component.css'],
})
export class PurchaseTokensComponent {
  purchaseTokensForm = this.formBuilder.group({
    tokens: 0,
  });

  constructor(private formBuilder: FormBuilder) {}
}
