import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'main',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../main/main.module').then(m => m.MainPageModule)
                    }
                ]
            },
            {
                path: 'monitor',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../monitor/monitor.module').then(m => m.MonitorPageModule)
                    }
                ]
            },
            {
                path: 'weather',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../weather/weather.module').then(m => m.WeatherPageModule)
                    }
                ]
            },
            {
                path: 'mine',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../mine/mine.module').then(m => m.MinePageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/main',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/main',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }