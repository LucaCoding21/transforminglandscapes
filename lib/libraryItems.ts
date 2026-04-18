export type LibraryItem = {
  slug: string;
  title: string;
  description: string;
  type: "Case Study" | "Interview" | "Economic Analysis" | "Resource";
  image: string;
  readingTime: string;
  author?: string;
  date?: string;
  body?: string[];
};

export const libraryItems: LibraryItem[] = [
  {
    slug: "the-cowichan-decision",
    title: "The Cowichan Decision",
    description:
      "A landmark ruling reshaping how rights, land, and development intersect across British Columbia.",
    type: "Case Study",
    image: "/images/nathan-rose-sbvzdXqnG4k-unsplash.jpg",
    readingTime: "12 min read",
    author: "Transforming Landscapes Research Team",
    date: "March 2026",
    body: [
      "The Cowichan decision represents a turning point in how courts interpret the intersection of Aboriginal title, land use planning, and real estate development in British Columbia. This case study examines the ruling's implications for practitioners across the province.",
      "At its core, the decision reaffirmed that Aboriginal title carries with it the right to determine land use,a principle with profound implications for how development projects are conceived, permitted, and executed on or near First Nations territories.",
      "For the real estate industry, the ruling demands a fundamental rethinking of due diligence processes. Developers, investors, and advisors must now account for a broader landscape of rights and interests than conventional title searches reveal.",
      "The decision also opens new pathways for collaborative development models. Several First Nations have already begun structuring joint ventures and ground-lease arrangements that honour both the court's findings and the economic interests of all parties involved.",
      "Looking ahead, the Cowichan decision is likely to accelerate the trend toward long-horizon governance structures in BC real estate. As more First Nations assert their rights over traditional territories, the industry will need practitioners who can navigate this evolving legal and cultural landscape.",
    ],
  },
  {
    slug: "governance-in-practice",
    title: "Governance in Practice",
    description:
      "A conversation on how long-horizon governance is changing the way deals are structured.",
    type: "Interview",
    image: "/images/vancouver.jpg",
    readingTime: "24 min read",
    author: "Transforming Landscapes Research Team",
    date: "February 2026",
    body: [
      "In this interview, we speak with practitioners on the front lines of a quiet revolution in how real estate deals are structured in British Columbia. The conversation reveals how governance frameworks rooted in Indigenous values are reshaping the economics of development.",
      "The shift toward long-horizon governance is not merely theoretical. Across the province, First Nations are implementing governance structures that embed cultural values,stewardship, intergenerational equity, community benefit,directly into the legal and financial architecture of real estate transactions.",
      "One practitioner describes the change in practical terms: where conventional deals optimize for a 5-to-10-year horizon, these new structures think in generations. The result is a fundamentally different risk profile, one that many institutional investors are beginning to find attractive.",
      "The interview also explores the challenges. Reconciling Western legal frameworks with Indigenous governance traditions requires creativity, patience, and a willingness to question assumptions that the real estate industry has long taken for granted.",
      "What emerges is a picture of an industry in transition,not away from profit, but toward a more expansive understanding of what value means and who gets to define it.",
    ],
  },
  {
    slug: "bc-market-outlook",
    title: "BC Market Outlook: 2026",
    description:
      "A quantitative look at capital flows, ground-lease activity, and long-horizon structures across BC.",
    type: "Economic Analysis",
    image: "/images/kyle-thacker-6ifWgyH5tuc-unsplash.jpg",
    readingTime: "18 min read",
    author: "Transforming Landscapes Research Team",
    date: "January 2026",
    body: [
      "The 2026 market outlook for British Columbia's real estate sector reflects a province at an inflection point. Capital flows are shifting, new deal structures are emerging, and the regulatory landscape continues to evolve in response to reconciliation imperatives.",
      "Ground-lease activity has increased substantially over the past 24 months. First Nations across BC are leveraging their land base through long-term lease structures that retain ownership while generating sustainable revenue streams. This model is attracting institutional capital at unprecedented levels.",
      "The data reveals a growing sophistication in how these deals are structured. Early ground-lease arrangements were relatively simple; today's transactions often involve complex layering of development rights, revenue-sharing mechanisms, and governance provisions that reflect the priorities of all parties.",
      "Capital flows into First Nations-led development projects have more than doubled since 2023, driven by a combination of regulatory clarity, proven deal structures, and growing recognition among investors that these projects carry lower long-term risk than conventional developments.",
      "The outlook for 2026 and beyond suggests continued acceleration. As more projects reach completion and demonstrate their financial viability, the case for First Nations-led development strengthens,not just as a matter of justice, but as sound economic strategy.",
    ],
  },
  {
    slug: "a-long-view-of-leasehold",
    title: "A Long View of Leasehold Tenure",
    description:
      "How modern ground-lease structures are being rethought for century-scale stewardship.",
    type: "Case Study",
    image: "/images/guy_dugas-mount-burgess-4882987.jpg",
    readingTime: "15 min read",
    author: "Transforming Landscapes Research Team",
    date: "December 2025",
    body: [
      "Leasehold tenure is not new,it has been a feature of land management systems for centuries. What is new is how First Nations in British Columbia are reimagining leasehold structures as tools for century-scale stewardship of their territories.",
      "This case study examines three distinct leasehold models currently in operation across BC. Each reflects a different set of priorities and constraints, but all share a common thread: the conviction that land is not merely an asset to be maximized, but a relationship to be maintained.",
      "The first model, operating in the Lower Mainland, uses a 99-year ground lease with built-in review periods that allow the Nation to adjust terms as circumstances evolve. The structure has attracted significant institutional investment while preserving the Nation's long-term control over land use decisions.",
      "The second model, in the interior, takes a more community-centered approach. Here, the leasehold structure is integrated with a broader community development plan that prioritizes housing, cultural facilities, and environmental protection alongside commercial development.",
      "The third model represents perhaps the most innovative approach: a leasehold structure that explicitly incorporates Indigenous legal principles into its governance framework, creating a hybrid system that draws on both Western and Indigenous legal traditions.",
    ],
  },
  {
    slug: "capital-governance-place",
    title: "Capital, Governance, Place",
    description:
      "Three case studies on how emerging governance models change the real estate balance sheet.",
    type: "Economic Analysis",
    image: "/images/micah-mckerlich-gaZBqZQWSng-unsplash.jpg",
    readingTime: "20 min read",
    author: "Transforming Landscapes Research Team",
    date: "November 2025",
    body: [
      "The relationship between capital, governance, and place is being fundamentally renegotiated in British Columbia. This paper examines three case studies that illustrate how emerging governance models are changing the real estate balance sheet.",
      "In the first case, a coastal First Nation restructured its development corporation to align capital deployment with cultural values. The result was a governance framework that treats environmental stewardship not as a cost but as a form of long-term value creation.",
      "The second case study examines a partnership between a First Nation and a major institutional investor. The deal structure,a joint venture with shared governance,challenged conventional assumptions about risk, return, and control. Two years in, the project is outperforming comparable conventional developments.",
      "The third case explores a failed project,a cautionary tale about what happens when governance structures are treated as afterthoughts rather than foundations. The analysis reveals how misaligned governance contributed to cost overruns, community opposition, and ultimately, project cancellation.",
      "Together, these cases paint a picture of an industry learning,sometimes painfully,that governance is not an obstacle to development but its precondition. The practitioners who understand this are building the projects that will define BC's real estate landscape for decades to come.",
    ],
  },
  {
    slug: "the-long-horizon",
    title: "The Long Horizon",
    description:
      "A leadership conversation on how 100-year thinking is reshaping deal structure in BC.",
    type: "Interview",
    image: "/images/jess-barnett-NwqvG6lb2jU-unsplash.jpg",
    readingTime: "28 min read",
    author: "Transforming Landscapes Research Team",
    date: "October 2025",
    body: [
      "What does it mean to think in centuries rather than quarters? In this extended conversation, leaders from First Nations governance, institutional investment, and real estate development explore how 100-year thinking is reshaping the way deals are structured in British Columbia.",
      "The conversation begins with a simple observation: most real estate development operates on a 5-to-15-year horizon. First Nations governance, by contrast, often thinks in terms of seven generations,roughly 150 to 200 years. This temporal mismatch creates both challenges and opportunities.",
      "One leader describes how her Nation approached a recent development decision: rather than asking what would maximize returns over the next decade, they asked what the land should look like in 2125. The answer led to a fundamentally different development plan,one that, paradoxically, proved more attractive to long-term institutional investors.",
      "The discussion also addresses practical challenges. Legal frameworks, financing structures, and market expectations are all calibrated for much shorter time horizons. Adapting them requires innovation at every level,from contract design to community engagement to capital structure.",
      "What emerges from the conversation is not a rejection of conventional real estate economics, but an expansion of it. The long horizon does not eliminate the need for financial returns; it redefines the context in which those returns are evaluated and the values against which they are measured.",
    ],
  },
  {
    slug: "framework-documents",
    title: "Framework & Policy Documents",
    description:
      "A curated collection of public frameworks, policy briefs, and reference material for practitioners.",
    type: "Resource",
    image: "/images/photo123.jpg",
    readingTime: "Library",
    author: "Transforming Landscapes Research Team",
    date: "Ongoing",
    body: [
      "This resource collection brings together the key policy frameworks, legal briefs, and reference documents that practitioners need to navigate the evolving landscape of First Nations-led real estate development in British Columbia.",
      "The collection is organized around four themes: legal foundations, governance frameworks, financial structures, and community engagement. Each section includes both primary source documents and contextual analysis to help practitioners understand not just what the rules are, but why they exist and how they are evolving.",
      "Legal foundations covers the key court decisions, legislative frameworks, and treaty agreements that shape the rights landscape. This section is updated regularly as new decisions are handed down and new agreements are reached.",
      "The governance frameworks section examines the range of governance models currently in use across BC, from traditional hereditary systems to modern corporate structures and hybrid approaches that draw on both traditions.",
      "Financial structures and community engagement round out the collection, providing practical tools and case examples for practitioners working to build projects that are financially viable, culturally appropriate, and community-supported.",
    ],
  },
  {
    slug: "research-methodology",
    title: "Research Methodology",
    description:
      "Our approach to primary research, interview protocols, and data sources for this platform.",
    type: "Resource",
    image: "/images/88d981ca690449c6259d98c72767878a.jpg",
    readingTime: "8 min read",
    author: "Transforming Landscapes Research Team",
    date: "September 2025",
    body: [
      "Transforming Landscapes is built on a foundation of rigorous primary research. This document outlines our methodology, interview protocols, and data sources,both to ensure transparency and to provide a model for others conducting similar work.",
      "Our research combines qualitative and quantitative methods. The qualitative component draws on in-depth interviews with practitioners, leaders, and community members across British Columbia. The quantitative component analyzes deal structures, capital flows, and market data from public and proprietary sources.",
      "Interview protocols were developed in consultation with First Nations advisors to ensure cultural appropriateness. All interviews follow a semi-structured format that allows for both systematic comparison across cases and the emergence of unexpected insights.",
      "Data sources include public land registries, corporate filings, court decisions, and published reports from government agencies, industry associations, and academic institutions. Where possible, we triangulate findings across multiple sources to ensure accuracy.",
      "We acknowledge that this research is conducted on the territories of many First Nations, and we are grateful for the generosity of those who have shared their knowledge and experience with us. Any errors or omissions are our own.",
    ],
  },
];
