import Cadastro from './components/cadastro/Cadastro';
import Home from './components/home/Home';

export const routes = [
    { path: '', component: Home, titulo: 'Home' }, /* path em branco = localhost:3000/#/, fazer um if para mandar o barra igual no app.vue */
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' }
];