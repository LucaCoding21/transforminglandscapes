export type InlineText = string | { text: string; href: string };
export type BodyBlock =
  | string
  | { figure: string }
  | { heading: string }
  | { content: InlineText[] };

export type LibraryItem = {
  slug: string;
  title: string;
  description: string;
  type: "Case Study" | "Interview" | "Resource";
  image?: string;
  blurDataURL?: string;
  readingTime: string;
  author?: string;
  authorAvatar?: string;
  date?: string;
  body?: BodyBlock[];
  youtubeId?: string;
  pdfUrl?: string;
};

export const libraryItems: LibraryItem[] = [
  {
    slug: "nations-housing-affordability",
    title: "Could Nations help unlock greater housing affordability?",
    description:
      "It's no secret that housing affordability remains a major concern across Canada, and more acutely, in regions like the Lower Mainland.",
    type: "Case Study",
    image: "/images/aditya-chinchure-m7CZ2o_3YQA-unsplash.webp",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAADQAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgADQAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAv/aAAwDAQACEQMRAD8Ad+zl+2hoHieG08I/FbzbXUmASC/SPcJD2EyryGPZgMHuB1r1n4rftZeEvAtvcad4bgm1LUwpG9kKQRt0BLH7xB5wPxNfj/8ADn44al8MLxb/AMOaNZ/avKkDTSgtKd/yghj0Kj0HOap6l8Y/FfifwbdW+vlLy4ku5Z/tLf63Nym1lz02g8jjrXnRnR3dweZ4rlast/wPbtV/bG+O63ri01SUx9iI0H8hWf8A8NkftA/9BOX/AL4X/CvjpfEuo75fKcxrvbjr/On/APCS6t/z2P5Cq+t/3SVVn1P/2Q==",
    readingTime: "5 min read",
    author: "Real Estate Institute of British Columbia",
    authorAvatar: "/images/reibclogo.jpeg",
    date: "April 2026",
    body: [
      { heading: "Characterizing the moment" },
      "It's no secret that housing affordability remains a major concern across Canada, and more acutely, in regions like the Lower Mainland. Politicians regularly promise fixes to the issue, media sensationalize the issue, and it remains a perennial talking point among the housing industry and related stakeholders. But while talk of the issue remains plentiful, solutions remain elusive. The result is that many hopeful homebuyers are left feeling increasingly hopeless, as few near-term solutions appear in sight.",
      "In this short research note, we'll examine a few key factors influencing the cost of delivering new housing in the region in simple terms, to develop a clear understanding of the challenges facing the delivery of new housing. We'll then examine how Nations could increasingly play a pivotal role in unlocking greater affordability in the region, providing a tangible near-term solution.",
      { heading: "New housing must pencil" },
      "While there are many factors that influence the price of housing, and particularly new housing, one of the primary factors in high-cost regions is the price of the land to build upon. As demand for housing increases in a given area, the value of the land increases by virtue of the fact the same parcel occupied by a low-density dwelling (e.g., a single-family home) could potentially be used to house many more people in a multi-family dwelling.",
      "At a certain point, when the demand becomes high enough, the cost to develop the land into a higher density format can make economic sense, provided the prices people are willing to pay for new multi-family units are sufficient to cover the costs of development (including the land cost), along with a reasonable profit for the developer. In industry jargon, it is said that new housing development must \"pencil\", meaning that the revenue generated from the sale of the new units must be sufficient to cover the costs of development, including a profit.",
      { heading: "Savings in the dirt" },
      "In the simplest terms, the cost of new housing is a function of the land cost and other development costs. Typically, these other development costs can be broadly categorized into what are commonly referred to as \"soft costs\" and \"hard costs\". Soft costs are generally associated with the administrative and regulatory requirements of building a new dwelling, such as the cost of obtaining building permits, engineering and design fees, and other similar costs. Hard costs are generally associated with the actual construction of the building, such as the cost of materials, labor, and other related costs.",
      "Therefore, when looking at the problem of delivering more affordable housing, it's important to focus on the areas where control can be exerted, and which are likely to yield the greatest impact. It's difficult to reduce hard costs, since they are often determined by various macroeconomic factors, and are largely outside of the control of any individual or developer, and so these are not factors which can easily be reduced. Similarly, soft costs can also be difficult to reduce, since many are also set by market forces. It's worth noting there are some soft costs which could be improved through better policy decisions (e.g., faster permitting processes, reduced development charges, etc.), but even so, there are limits to how much can be done in this regard.",
      "While the relative proportions of these costs will vary across development projects, the plot below provides an illustrative example of the relative significance of each cost component in the overall creation cost of a new housing development.",
      { figure: "cost-breakdown" },
      "As the plot illustrates, the land cost is typically the largest component of the overall cost of creating a new dwelling, followed by hard costs. The question that naturally arises is whether anything can be done to reduce the land cost component?",
      { heading: "Enter Nations" },
      "Title to land remains a sensitive issue in BC (and in Canada), and a fulsome discussion of this issue is beyond the scope of this research note. Our goal here isn't to discuss the historical context of land claims and title to land in the region, but rather to focus on the potential for Nations to play an impactful role in unlocking greater affordability in the region.",
      "Where title to land enters the equation in the context of generating greater housing affordability is in differentiating between freehold and leasehold titles. On many Nations lands in the region, homeowners who purchased homes on these lands do not actually own the land beneath their homes, but rather, lease it from the Nations. These leasehold arrangements are typically set for a predetermined period of time, usually 99 years, but there are many different possible arrangements. The key distinguishing factor however, is that the ownership of the land itself remains with the Nation, and not the homeowner.",
      "An interesting feature of these leasehold arrangements is that the homes sitting on these lands have historically sold for a discount relative to similar homes on freehold land.",
      { figure: "price-trend" },
      { heading: "A possible solution" },
      "While the discount illustrated in the plot above pertains to single family homes with (potentially) developable land beneath them, it's important to recognize the implications of this discount for the feasibility of new housing development.",
      "If leasehold land can be purchased for development at a discounted price relative to freehold land, with a lease term well beyond the useful life of a typical building (whether single-family or multi-family), significant cost savings could be passed along to the end-users in the form of greater affordability. Even assuming a modest discount on the purchase of leasehold land of 20%, the potential cost savings that passed along to the end-users in the form of greater affordability could be significant.",
      { figure: "price-comparison" },
      "Many Nations own lands adjacent to some of the most desirable neighborhoods in the region, and in many cases, the leasehold agreements in place on these lands are nearing their expiration date, which (partially) explains the discount in price trends shown previously. Since Nations may determine the land use, density, and thus, the marketable value of their land by their own accord, a significant opportunity exists to unlock tremendous value for the Nations, and potentially improve housing affordability in the region at the same time.",
      "Recent years have seen numerous well-executed examples of such opportunities, with developments like Sen\u0313áḵw at the foot of the Burrard Bridge in Vancouver now rising from the ground, as well as developments by the Tsawwassen Nation, to name just a few. Though it remains true that this potential solution may not represent a panacea for housing affordability in the region, it could mark a significant step towards unlocking a more affordable future.",
    ],
  },
  {
    slug: "cowichan-decision",
    title:
      "The Cowichan Decision: What It Means for Property Owners and the Real Estate Sector",
    description:
      "The case, which spanned more than 11 years, is one of the most complex and lengthy trials in Canadian history.",
    type: "Case Study",
    image: "/images/vancouver.webp",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAADwAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgADwAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAv/aAAwDAQACEQMRAD8A+nbn4yWUaFku94/uwpx+Z/xrx3xv+19Z+DF8k26Xl0BlbfdukYdPm2jC1qX3xR0zW7G40uysorYSxsjny23hTwdrhhg46HBx1r5e1P4X6QLi61Ow09Zb5rhZYZJZy+xUYsAQUAPJy3GcgYIGa7a2KkvdhS+eh8qqM5bVEvvNLUv2/vGrzJJomg2aWzorbZy+8Meo+U4x6d6z/wDhv34mf9ATTPzl/wAa8FuPggGvruS6nuFEkm5FgkjVQpUZBBX+/ux7Y75pn/CkLP8A5+L7/v8ARf8AxFZN1nrb8DndCtf+If/Z",
    readingTime: "2 min read",
    author: "Real Estate Institute of British Columbia",
    authorAvatar: "/images/reibclogo.jpeg",
    date: "April 2026",
    body: [
      "On August 7, 2025, the British Columbia Supreme Court issued its decision in Cowichan Tribes v. Canada (Attorney General), 2025 BCSC 1490, recognizing the Cowichan Nation\u2019s Aboriginal title to the historic village site of Tl\u2019uqtinus and affirming its constitutional right to fish in the south arm of the Fraser River for food.",
      "The case, which spanned more than 11 years, is one of the most complex and lengthy trials in Canadian history. The approximately 1,800 acres recognized in the decision overlap with privately owned lands held by third parties who were not part of the proceedings. While the Cowichan asserted Aboriginal title over these lands, they did not seek to invalidate existing private titles.",
      {
        content: [
          "For property owners and the real estate sector, the key takeaway is that the decision does not change fee simple ownership. Private property rights remain intact, and landowners can continue to buy, sell, and hold property as before. A recent ",
          {
            text: "analysis from UBC",
            href: "https://news.ubc.ca/2026/02/cowichan-decision-wont-affect-private-landowners/",
          },
          " supports this interpretation, noting that the ruling is grounded in established legal principles and does not threaten private landowners anywhere in British Columbia.",
        ],
      },
      "For real estate professionals, the decision underscores the importance of understanding the evolving legal and policy landscape surrounding Indigenous rights and land use in British Columbia. While the ruling does not alter private property ownership, it may influence future conversations around land governance, collaboration with Indigenous Nations, development considerations, and public understanding of Aboriginal title. Being informed about these issues can help professionals respond to questions and navigate discussions about land, ownership, and reconciliation with clarity and confidence.",
      "As with many landmark decisions, the broader implications, particularly around land governance and relationships with Indigenous Nations, will continue to evolve over time.",
      {
        content: [
          "For those seeking more information, resources include the official ",
          {
            text: "BC Supreme Court judgment",
            href: "https://www.bccourts.ca/jdb-txt/sc/25/14/2025BCSC1490.htm",
          },
          ", the ",
          {
            text: "City of Richmond\u2019s information page",
            href: "https://www.richmond.ca/city-hall/news/2025/meetingforcowichan20251019.htm",
          },
          " on the decision, and analyses from legal firms specializing in Indigenous law.",
        ],
      },
    ],
  },
  {
    slug: "andrew-hungerford-interview",
    title: "In Conversation with Andrew Hungerford",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua on the evolving landscape of long-horizon real estate in British Columbia.",
    type: "Interview",
    image: "/images/scott-graham-andrew.webp",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAADQAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgADQAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAv/aAAwDAQACEQMRAD8A2Pg3p2t+ENY0yTRNKGsRXFt5EEDsftImWUb3UH5SNhYYOScZGAK+5L3WPEWq2xtb3wzPZeTHuklvI1FtFhSSXKsWIU9QBzX5hJ411PR5dCgsFCPNDf30kjfMxNlaO6xjIwFZsbvYY6E17V+zp8R9X8X2vijR/FEEGowRwW8w3xqp3SFlbO0DOQBXaoSnHmVjx8X7KNfktf8ApbfIb4o0rwxYavJB4i1V7u+YB3ntYUCS7+d7bhkt29gAO1c/9n+Hn/P9ef8AfuL/AAr6M0n4A6V43sk1nTddv/D8KlovstuyyRAqSSy+YCy5z93OB2rR/wCGUYf+h41X/viH/wCJpe3xC0uvxPSdTAJ2kpX+R//Z",
    readingTime: "Video Interview",
    author: "Greater Vancouver REALTORS",
    authorAvatar: "/images/gvrlogo.jpeg",
    date: "April 2026",
    youtubeId: "Hjn1ZtMfGcI",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
    ],
  },
  {
    slug: "komal-shaikh-interview",
    title: "Interview with Komal Shaikh",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A wide-ranging discussion on governance, development, and the shifting foundations of the real estate industry in British Columbia.",
    type: "Interview",
    image: "/images/patrick-perkins-komal.webp",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAADQAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgADQAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAv/aAAwDAQACEQMRAD8A+0/A6+CPB/w/m8Qaf4VTwvM95cxTTW8aRW9ysFy8EbtsOMlQpzjI5Fet2Mk2hvcWFyFs9t55DCFgNquzOXA6EGQfNxn5ya8R0P4erYfCJ9Ev9XutT0jWb3UTPaz7AFe7uJpJCjxqrqCS2Bk4z14rvpVW70kXM+4zpcIqybjuCqucZ98AH2oxNCcvhemv33FLEU1NKa3S167J6fP8LnrE10JpWlhcuGxnDqMEADBz3wM1H50v+1/38SvgLxnqurWni7VlF9OIpJlkjjjfy1jDRpleAc5bcxPvjtXNf8JBqn/P7df9/wA/4VyTwl5N2Oyjm01BLme39dD/2Q==",
    readingTime: "Video Interview",
    author: "Greater Vancouver REALTORS",
    authorAvatar: "/images/gvrlogo.jpeg",
    date: "April 2026",
    youtubeId: "BbZQT2A85o8",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    ],
  },
  {
    slug: "irea-mcdonald-rose-interview",
    title: "In Conversation with Byron McDonald & Emma Rose, Indigenous Real Estate Association",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A conversation with Byron McDonald and Emma Rose of the Indigenous Real Estate Association on the path forward.",
    type: "Interview",
    image: "/images/guy_dugas-mount-burgess-4882987.webp",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAADQAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgADQAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAv/aAAwDAQACEQMRAD8AzPir+01+0drHh4+E77wlb+EFZVka/wBHtDcXaeW2WjDyuygMR8xxnHGa8A0X9uv9pP4f388vh/Ubi4thgRw6nFAVwoC/OERTkgEnDDk9az/Hvx88cXU+u2W6KKzs7x4DGgZWYMRg7wQRsAwoOffNeff8Jzc6VfPbapZQaxuiH+vGADhTnA9c150c9qyksPGd790eRmaeHXOt+x77af8ABVf9qvT4Ravp+iX5XH72WCQOTgZzslA689O9Wv8Ah7J+1T/0AvD/AP35m/8Aj1fIFp440+eHd/wi+mcEgZiJOB6kEZq1/wAJlp3/AELGl/8Aflv/AIqvcWFqW+NfceC87rfyfif/2Q==",
    readingTime: "Video Interview",
    author: "Greater Vancouver REALTORS",
    authorAvatar: "/images/gvrlogo.jpeg",
    date: "April 2026",
    youtubeId: "p28FqYdGh50",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    ],
  },
  {
    slug: "unpacking-inspire-jericho",
    title:
      "Unpacking Inspire Jericho: Luxury Real Estate Development and First Nations in Vancouver",
    description:
      "What happens when Indigenous nations own and develop prime real estate land in one of the world\u2019s most expensive cities?",
    type: "Case Study",
    image: "/images/veronica-dudarev-jericho.webp",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAADQAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgADQAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAv/aAAwDAQACEQMRAD8A/RPRPiLod1KbePVrV5R285QeOvWvTtN8W2V6BHayR3JwG/durHB79elfj5pfw70bTfiVL4b1dE1iOexguUaZWjEeDJEQFjdSSRGMsT1J4r0vwFq2l6deyXHh7RoNOmthMC/mTSl1QD5Tufgc8Y6H1r3Y4uq0uY8qWDpttWufqp/a3/TA/wCfxo/tb/p3P+fxr8uZ/jv4riZfLtrYK4DYPm8Z7cOKh/4X54u/597b/wAi/wDxyuhU6j15jH2FH/n2vwP/2Q==",
    readingTime: "150-page thesis (PDF)",
    author: "Alexine Maria Mendoza Sanchez",
    date: "October 2020",
    pdfUrl: "/documents/unpacking-inspire-jericho.pdf",
    body: [
      { heading: "Lay Summary" },
      "What happens when Indigenous nations own and develop prime real estate land in one of the world\u2019s most expensive cities? Unpacking Inspire Jericho attempts to answer this question by showing the connection of potential luxury development and involvement of First Nations in Vancouver. Jericho Lands, a 90-acre site located in Vancouver\u2019s West Point Grey neighborhood, is now jointly owned by three First Nations: the Musqueam, Squamish, and Tsleil-Waututh (MST) Nations, and Canada Lands Company, a non-agent Crown corporation. The study accentuates the role of MST Development Corporation, a property developer owned by the MST Nations. With its unique structure, reconciliation is identified as a main component of this development which promotes changes in urban planning practices in Vancouver. Ultimately, this research aims to understand the effects of a complicated yet historic property development against the backdrop of worsening issues of housing affordability and housing crisis in the city.",
      { heading: "Abstract" },
      "This thesis explores the urban planning process surrounding the 90-acre redevelopment of Jericho Lands, a former site of Jericho Detachment/Garrison in Vancouver, BC. This is one of the more valuable pieces of land in the province. I investigate how the Musqueam, Squamish, and Tsleil-Waututh (MST) First Nations, various neighborhood groups, and the different levels of the government interact in this planning process. To unpack this, I employ mixed methodologies including review of government and secondary documents, interviews from key informants, and participant observation in open-to-public events of Jericho Lands. This inquiry comes at a time when the historically marginalized Lower Mainland First Nations become owners and developers of luxury real estate land in one of the world\u2019s most expensive cities. Together with Canada Lands Company (CLC), a non-agent Crown corporation, the cooperation with the three First Nations, and the City of Vancouver establishes a complex growth coalition that supports the development of Jericho Lands. In here, I find that reconciliation narratives are used as a framework in the policy process to advance the redevelopment. Consequently, the planning process of Jericho Lands as a large-scale development reveals the prevalence of growth-based initiatives alongside conflicting and overlapping interests with other issues and stakeholders in the city. Amidst these interactions and convergent subjectivities, the involvement of MST Development Corporation as the real estate arm of the First Nations represents their participation in the growth machine framework of Harvey Molotch (1979) and later reintroduced with John Logan (1987). Since this study only covers Phase One of Jericho Lands Policy Planning Program, I conclude with questions to consider in further studies of such a complex site.",
      "Alexine Maria Mendoza Sanchez. Master of Arts thesis, Department of Geography, The University of British Columbia (Vancouver), October 2020.",
    ],
  },
];
