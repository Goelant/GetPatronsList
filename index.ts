import server from "bunrest";
import { Patreon } from '@anitrack/patreon-wrapper';

const app = server();

app.get('/', async (req, res) => {
    try {

        console.log(req.query)

        Patreon.Authorization({
            AccessToken: req.query.AccessToken,
            CampaignID: req.query.CampaignID
        });

        const Patrons = await Patreon.FetchPatrons([
            'active_patron',
            'declined_patron',
            'former_patron',
        ]);


        const PatronsList = Patrons.map(element => element.displayName );

        console.log(PatronsList)

        res.status(200).json({ PatronsList});

    } catch (error) {
        console.log('❌ ', error)
    }
});

app.listen(2244, () => {
    console.log('App is listening on port 2244');
});