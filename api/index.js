import express from 'express';
import data from '../src/testData';

// const obj router from express Router.
const router = express.Router();
// data's contests reduce will return singe obj with key:contest.id and value:contest
const contests = data.contests.reduce((obj, contest) => {
    obj[contest.id] = contest;
    return obj;
}, {});

// router for /contests
router.get('/contests', (req, res) => {
    res.send({ 
        contests:contests
    });
});

// router for contests/:contestId
router.get('/contests/:contestId', (req, res)=>{
    let contest = contests[req.params.contestId];
    contest.description = 'asdfasfasdfasdfasdfasdfas';
    res.send(contest);
});

export default router;