import {NgModule} from '@angular/core';
import {
    MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule,
    MatMenuModule, MatOptionModule, MatSelectModule
} from "@angular/material";

const ImportExportModules: any = [
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule
];

@NgModule({
    imports: ImportExportModules,
    exports: ImportExportModules,
    declarations: []
})
export class MaterialModule {
}
