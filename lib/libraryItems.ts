export type BodyBlock = string | { figure: string };

export type LibraryItem = {
  slug: string;
  title: string;
  description: string;
  type: "Case Study" | "Interview" | "Economic Analysis" | "Resource";
  image: string;
  blurDataURL: string;
  readingTime: string;
  author?: string;
  date?: string;
  body?: BodyBlock[];
};

export const libraryItems: LibraryItem[] = [
  {
    slug: "the-cowichan-decision",
    title: "The Cowichan Decision",
    description:
      "A landmark ruling reshaping how rights, land, and development intersect across British Columbia.",
    type: "Case Study",
    image: "/images/nathan-rose-sbvzdXqnG4k-unsplash.webp",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgACgAKAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAf/aAAwDAQACEQMRAD8A+btH16x0P4e6Vpr2DXe/bA1s5by1lL+VIg3jO8MzMwAIDE5yDXzdda3o9rcy20Xhy0ZIXZFLkM5CnALHAyfU4GfQVq6VqF+nwy1SZLmVXiRJUYOwKyFlUuDnhivGeuOOleQRgMis3JIBJNfk+CyiLnU953v5r8mjvq4pxS0P/9k=",
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
    image: "/images/vancouver.webp",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgACgAKAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAf/aAAwDAQACEQMRAD8A9I+Lfxo+KXgWwjXSNPSbULsHywHWeOIDktMQAqAdcdTXxNL+2Z+0GZXI1AICT8qaepUewOw5A7HNfRdj/p2muL3/AEjBYfvPn4/HNecyafYeY3+jR9T/AACuuo5t7r7j5V0k/tP7/wDgH//Z",
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
    image: "/images/kyle-thacker-6ifWgyH5tuc-unsplash.webp",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgACgAKAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAf/aAAwDAQACEQMRAD8A2/2Uf28Pj5r02nr8R9Q0vVdLvrhhNLeQGG4jjVQCYHgCIRkdHU8k89h+mq/tQeEyoPn2nP8Atmv5YvB1zc28c32eV4trDG1iuPpivWE1nV9i/wCnT9B/y1b/ABpYSm+W7dzgxGIalaJ//9k=",
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
    image: "/images/guy_dugas-mount-burgess-4882987.webp",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgACgAKAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAf/aAAwDAQACEQMRAD8A86+J/wAaP2vPCvi+31jSfEdnFqsMQjjXSAkdu0Ue7BNlsBZmJOWfcSFUdBXFp+3d/wAFBI0WNNV3qoABbQkZiB3J8rk+pr508Uahfxa7rN1HcypMl5LtcOwYZnnU4OcjIAH0AFebwaxq5hjJvpySo/5at6fWpy6pUxPNzyfuu3Q+VzbG1MPW5Kex/9k=",
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
    image: "/images/micah-mckerlich-gaZBqZQWSng-unsplash.webp",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgACgAKAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAf/aAAwDAQACEQMRAD8AxR+03+y/p9qyw6bqMiwoBhLdAGbpgbmBx15qn/w1N+yoeW8M6uSev7iDr/39r8j9Okkk0+cyMWKBduTnGfSqRllyfnb869yGPnJXufJSyejF7H//2Q=",
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
    image: "/images/jess-barnett-NwqvG6lb2jU-unsplash.webp",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgACgAKAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAf/aAAwDAQACEQMRAD8ApXeu/skSadJql9aXhnUZW2h8p7iZj0CxoxyTXOw67+xzcQpP/Zuqp5ihtpgGRkZwcNivzt8IyyLdJMrkSLuIYH5gQp5Bpbq7u1uZgJnADtxuPrXRmfH+MhNKCVjwcFwPhnG9Rtvy0/zP/9k=",
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
    image: "/images/photo123.webp",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgACgAKAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAf/aAAwDAQACEQMRAD8Atat4k/bLcQ6FpI063R40aSeBIVQ4xnczlo9wz90AeoFedzeDP2xTK5HiW6ILHpeWwHXsMcV9uW9zci3VRK4BxxuPoaw5ry7EzgTyABj/ABH1r2fqbf22vn/wD572qT+Ffj/mf//Z",
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
    slug: "nations-housing-affordability",
    title: "Could Nations Help Unlock Greater Housing Affordability?",
    description:
      "Examining how Nations could play a pivotal role in unlocking greater affordability in the Lower Mainland through leasehold land arrangements.",
    type: "Economic Analysis",
    image: "/images/hero-alt.webp",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgACgAKAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAf/aAAwDAQACEQMRAD8A+ftH16x0P4e6Vpr2DXe/bA1s5by1lL+VIg3jO8MzMwAIDE5yDXzdda3o9rcy20Xhy0ZIXZFLkM5CnALHAyfU4GfQVq6VqF+nwy1SZLmVXiRJUYOwKyFlUuDnhivGeuOOleQRgMis3JIBJNfk+CyiLnU953v5r8mjvq4pxS0P/9k=",
    readingTime: "10 min read",
    author: "Transforming Landscapes Research Team",
    date: "April 2026",
    body: [
      "It's no secret that housing affordability remains a major concern across Canada, and more acutely, in regions like the Lower Mainland. Politicians regularly promise fixes to the issue, media sensationalize the issue, and it remains a perennial talking point among the housing industry and related stakeholders. But while talk of the issue remains plentiful, solutions remain elusive. The result is that many hopeful homebuyers are left feeling increasingly hopeless, as few near-term solutions appear in sight.",
      "In this short research note, we'll examine a few key factors influencing the cost of delivering new housing in the region in simple terms, to develop a clear understanding of the challenges facing the delivery of new housing. We'll then examine how Nations could increasingly play a pivotal role in unlocking greater affordability in the region, providing a tangible near-term solution.",
      "While there are many factors that influence the price of housing, and particularly new housing, one of the primary factors in high-cost regions is the price of the land to build upon. As demand for housing increases in a given area, the value of the land increases by virtue of the fact the same parcel occupied by a low-density dwelling could potentially be used to house many more people in a multi-family dwelling.",
      "At a certain point, when the demand becomes high enough, the cost to develop the land into a higher density format can make economic sense, provided the prices people are willing to pay for new multi-family units are sufficient to cover the costs of development, including the land cost, along with a reasonable profit for the developer. In industry jargon, it is said that new housing development must \"pencil\", meaning that the revenue generated from the sale of the new units must be sufficient to cover the costs of development, including a profit.",
      "In the simplest terms, the cost of new housing is a function of the land cost and other development costs. Typically, these other development costs can be broadly categorized into what are commonly referred to as \"soft costs\" and \"hard costs\". Soft costs are generally associated with the administrative and regulatory requirements of building a new dwelling, such as the cost of obtaining building permits, engineering and design fees, and other similar costs. Hard costs are generally associated with the actual construction of the building, such as the cost of materials, labor, and other related costs.",
      "When looking at the problem of delivering more affordable housing, it's important to focus on the areas where control can be exerted, and which are likely to yield the greatest impact. It's difficult to reduce hard costs, since they are often determined by various macroeconomic factors, and are largely outside of the control of any individual or developer. Similarly, soft costs can also be difficult to reduce, since many are also set by market forces. It's worth noting there are some soft costs which could be improved through better policy decisions, such as faster permitting processes and reduced development charges, but even so, there are limits to how much can be done in this regard.",
      "While the relative proportions of these costs will vary across development projects, the plot below provides an illustrative example of the relative significance of each cost component in the overall creation cost of a new housing development.",
      { figure: "cost-breakdown" },
      "As the plot illustrates, the land cost is typically the largest component of the overall cost of creating a new dwelling, followed by hard costs. The question that naturally arises is whether anything can be done to reduce the land cost component?",
      "Title to land remains a sensitive issue in BC and in Canada, and a fulsome discussion of this issue is beyond the scope of this research note. Our goal here isn't to dismiss the historical context of land claims and title to land in the region, but rather to focus on the potential for Nations to play an impactful role in unlocking greater affordability in the region.",
      "Where title to land enters the equation in the context of generating greater housing affordability is in differentiating between freehold and leasehold titles. On many Nations lands in the region, homeowners who purchased homes on these lands do not actually own the land beneath their homes, but rather, lease it from the Nations. These leasehold arrangements are typically set for a predetermined period of time, usually 99 years, but there are many different possible arrangements. The key distinguishing factor is that the ownership of the land itself remains with the Nation, and not the homeowner.",
      "An interesting feature of these leasehold arrangements is that the homes sitting on these lands have historically sold for a discount relative to similar homes on freehold land.",
      { figure: "price-trend" },
      "If leasehold land can be purchased for development at a discounted price relative to freehold land, with a lease term well beyond the useful life of a typical building, significant cost savings could be passed along to end-users in the form of greater affordability. Even assuming a modest discount on the purchase of leasehold land of 20%, the potential cost savings passed along to end-users could be significant.",
      { figure: "price-comparison" },
      "Many Nations own lands adjacent to some of the most desirable neighborhoods in the region, and in many cases, the leasehold agreements in place on these lands are nearing their expiration date, which partially explains the discount in price trends shown previously. Since Nations may determine the land use, density, and thus the marketable value of their land by their own accord, a significant opportunity exists to unlock tremendous value for the Nations, and potentially improve housing affordability in the region at the same time.",
      "Recent years have seen numerous well-executed examples of such opportunities, with developments like Sen\u0301a\u0301\u1E35w at the foot of the Burrard Bridge in Vancouver now rising from the ground, as well as developments by the Tsawwassen Nation, to name just a few. Though it remains true that this potential solution may not represent a panacea for housing affordability in the region, it could mark a significant step towards unlocking a more affordable future.",
    ],
  },
  {
    slug: "research-methodology",
    title: "Research Methodology",
    description:
      "Our approach to primary research, interview protocols, and data sources for this platform.",
    type: "Resource",
    image: "/images/88d981ca690449c6259d98c72767878a.webp",
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgACgAKAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAf/aAAwDAQACEQMRAD8A9U8P/tL3c8e/UoNFdVy22O4AYquQApWVl5OBnoDwa82uf2/vBUFxLC/hS33RsynOoEHIOOQLc/zP1r85fBNlZ3Gn+FIriCOVJr+8R1ZQwdVtVYBgeoDcgHvzXrlz4Z8NpcyoulWgVXYACCMAAH6Vz4jPsS5tRm193+TPNwfDeGlH3ld/15n/2Q=",
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
