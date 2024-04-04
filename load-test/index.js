import GetPeople from './scenarios/getPeople.js'
import { group, sleep } from 'k6';

export default () => {
    group('Endpoint Get People - Controller People - Api Test', () => {
        GetPeople();
    });

    sleep(1);
}