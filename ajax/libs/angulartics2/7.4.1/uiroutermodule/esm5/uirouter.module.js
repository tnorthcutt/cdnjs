/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Angulartics2, Angulartics2OnModule, ANGULARTICS2_TOKEN, RouterlessTracking, } from 'angulartics2';
import { UIRouterTracking } from './uirouter';
var Angulartics2UirouterModule = /** @class */ (function () {
    function Angulartics2UirouterModule() {
    }
    /**
     * @param {?=} settings
     * @return {?}
     */
    Angulartics2UirouterModule.forRoot = /**
     * @param {?=} settings
     * @return {?}
     */
    function (settings) {
        if (settings === void 0) { settings = {}; }
        return {
            ngModule: Angulartics2UirouterModule,
            providers: [
                { provide: ANGULARTICS2_TOKEN, useValue: { settings: settings } },
                { provide: RouterlessTracking, useClass: UIRouterTracking },
                Angulartics2,
            ],
        };
    };
    Angulartics2UirouterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [Angulartics2OnModule],
                },] }
    ];
    return Angulartics2UirouterModule;
}());
export { Angulartics2UirouterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWlyb3V0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcnRpY3MyL3Vpcm91dGVybW9kdWxlLyIsInNvdXJjZXMiOlsidWlyb3V0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUVwQixrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ25CLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUU5QztJQUFBO0lBZ0JBLENBQUM7Ozs7O0lBWlEsa0NBQU87Ozs7SUFBZCxVQUNFLFFBQTRDO1FBQTVDLHlCQUFBLEVBQUEsYUFBNEM7UUFFNUMsT0FBTztZQUNMLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLEVBQUU7Z0JBQ3ZELEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDM0QsWUFBWTthQUNiO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWZGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEM7O0lBY0QsaUNBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEFuZ3VsYXJ0aWNzMixcbiAgQW5ndWxhcnRpY3MyT25Nb2R1bGUsXG4gIEFuZ3VsYXJ0aWNzMlNldHRpbmdzLFxuICBBTkdVTEFSVElDUzJfVE9LRU4sXG4gIFJvdXRlcmxlc3NUcmFja2luZyxcbn0gZnJvbSAnYW5ndWxhcnRpY3MyJztcbmltcG9ydCB7IFVJUm91dGVyVHJhY2tpbmcgfSBmcm9tICcuL3Vpcm91dGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0FuZ3VsYXJ0aWNzMk9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyVWlyb3V0ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBzZXR0aW5nczogUGFydGlhbDxBbmd1bGFydGljczJTZXR0aW5ncz4gPSB7fSxcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBbmd1bGFydGljczJVaXJvdXRlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEFOR1VMQVJUSUNTMl9UT0tFTiwgdXNlVmFsdWU6IHsgc2V0dGluZ3MgfSB9LFxuICAgICAgICB7IHByb3ZpZGU6IFJvdXRlcmxlc3NUcmFja2luZywgdXNlQ2xhc3M6IFVJUm91dGVyVHJhY2tpbmcgfSxcbiAgICAgICAgQW5ndWxhcnRpY3MyLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=