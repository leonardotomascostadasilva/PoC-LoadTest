import http from 'k6/http';
import { check, fail } from 'k6';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

export let Duration = new Trend('get_people_duration');
export let FailRate = new Rate('get_people_fail_rate');
export let SuccessRate = new Rate('get_people_success_rate');
export let Reqs = new Counter('get_people_reqs');

export default function () {
    let response = http.get('http://localhost:3000/');
    
    Duration.add(response.timings.duration);
    Reqs.add(1);
    FailRate.add(response.status !== 200);
    SuccessRate.add(response.status === 200);

    let statusError = r.status
    if (!check(response, {
        'is status 200 ': (r) => r.status === 200,
    })){
        fail(statusError);
    }

    sleep(1);
}