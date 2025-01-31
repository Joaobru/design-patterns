import { myDataBaseFunction } from './db/my-database-function';
// import { myDataBaseModule } from './db/my-database-module';
// import { myDataBaseClassic } from './db/my-database-classic';
import './module_a';

myDataBaseFunction.add({ age: 20, name: 'Maria Clara' });
myDataBaseFunction.add({ age: 5, name: 'Simba' });
myDataBaseFunction.add({ age: 5, name: 'Tom' });
myDataBaseFunction.add({ age: 5, name: 'Luna' });

myDataBaseFunction.show();
