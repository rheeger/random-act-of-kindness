import {NextRequest, NextResponse} from 'next/server';
import getRandomOrg from "../../random-org";

async function getResponse(req: NextRequest): Promise<NextResponse> {
    let accountAddress: string | undefined = '';
    try {
        const body: { trustedData?: { messageBytes?: string } } = await req.json();
        console.log(body)

    } catch (err) {
        console.error(err);
    }

    // fetches and prints to the console a random org using the Endaoment API
    const org = await getRandomOrg();
    console.log(org);

    // use just the first character of the nteeCode to get the major code
    const orgMajorCode = org.nteeCode.slice(0,1);

    const getOrgMetaTagImageURL = `${process.env.PLACID_ORG_GENERATOR_URL}?
OrgTitle=${encodeURIComponent(org.name)}&
OrgDescription=${encodeURIComponent(String(org.description))}&
${org.logoUrl && `OrgLogo=${encodeURIComponent(String(org.logoUrl))}&`}
${org.address && `OrgLocation=${encodeURIComponent(org.address.city + ', ' + org.address.state)}&`}
NTEETitle=${encodeURIComponent(org.nteeDescription)}&
NTEEIcon=${encodeURIComponent(`https://app.endaoment.org/images/ntee/v2/@256w/${orgMajorCode}.png`)}`;

    console.log(getOrgMetaTagImageURL)

    return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${getOrgMetaTagImageURL}" />
    <meta property="fc:frame:button:1" content="Search Again" />
    <meta property="fc:frame:post_url" content="https://random-act-of-kindness.vercel.app/api/frame" />
    <meta property="fc:frame:button:2" content="Donate to ${org.name}" />
    <meta property="fc:frame:button:2:redirect" content="https://app.endaoment.org/orgs/${org.ein}" />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';
