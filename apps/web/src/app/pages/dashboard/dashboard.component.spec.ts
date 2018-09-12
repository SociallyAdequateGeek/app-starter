import { TestBed, async } from '@angular/core/testing';
import { DashboardPageComponent } from './dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DashboardPageComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardPageComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    it('should create', async(() => {
        const fixture = TestBed.createComponent(DashboardPageComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));

})
