import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PrivateChatPage } from './private-chat.page';

describe('PrivateChatPage', () => {
  let component: PrivateChatPage;
  let fixture: ComponentFixture<PrivateChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateChatPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
