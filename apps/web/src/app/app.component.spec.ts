import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { of } from 'rxjs';

class FakeLoader implements TranslateLoader {
    getTranslation(lang: string) {
        return of(lang);
    }
}

describe('AppComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, TranslateModule.forRoot({
                loader: { provide: TranslateLoader, useClass: FakeLoader },
            })],
            declarations: [AppComponent],
            providers: []
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});
