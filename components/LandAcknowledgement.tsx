"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LandAcknowledgement() {
  return (
    <section className="relative bg-sage-600 text-earth-50">
      <div className="relative px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden bg-sage-400/40"
          >
            <Image
              src="/images/kyle-thacker-6ifWgyH5tuc-unsplash.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{
              duration: 0.95,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col"
          >
            <h2
              className="font-heading font-semibold leading-[0.95] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Acknowledgement
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 text-[0.82rem] leading-[1.65] text-earth-50/90 md:grid-cols-2 md:gap-8">
              <div className="space-y-4">
                <p>
                  The Real Estate Institute of BC and Greater Vancouver
                  REALTORS&reg; headquarters are located in Vancouver, BC, the
                  traditional, ancestral, and unceded shared territory of the
                  xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and
                  səlilwətaɬ (Tsleil-Waututh) peoples. This place is called
                  K&rsquo;emk&rsquo;emeláy (place of many maple trees) by the
                  Squamish Nation, with many specific place names throughout
                  the city from all Nations who are caretakers of this
                  territory.
                </p>
                <p>
                  Our organization was founded on principles that align with
                  respect, relationship, and representation, namely our values
                  of integrity, diversity, transparency, and community.
                </p>
                <p>
                  In keeping with our values, as uninvited guests on this land,
                  we would like to acknowledge the Indigenous Peoples who have
                  stewarded territories across BC since time immemorial, an
                  area where REIBC now has the privilege to serve:
                </p>
                <p>
                  On Vancouver Island and neighbouring islands, the traditional
                  and unceded territory of the Xwsepsum and Songhees Nations of
                  the lək̓ʷəŋən families and ancestors, Scia&rsquo;new,
                  T&rsquo;Sou-ke. The MÁLEXEȽ (Malahat), BOḰEĆEN (Pauquachin),
                  SȾÁ¸UTW̱ (Tsawout), W̱JOȽEȽP (Tsartlip), and W̱SÍḴEM (Tseycum)
                  nations of the W̱SÁNEĆ peoples. The Quw&rsquo;utsun
                  (Cowichan); Stz&rsquo;uminus; Snuneymuxw; Snaw-naw-as;
                  Lyackson; Penelakut; Halalt; Qualicum; K&rsquo;ómoks; the
                  Kwakwaka&rsquo;wakw nations; and the Nuu-chah-nulth nations.
                  Métis.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  In the Lower Mainland, the traditional and unceded territory
                  of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh Úxwumixw
                  (Squamish), səlilwətaɬ (Tsleil-Waututh), QayQayt First
                  Nation, Kwantlen, q̓íc̓əy̓ (Katzie), Semiahmoo, Tsawwassen
                  First Nations, kʷikʷəƛ̓əm (Kwikwetlem), and Stó:lō Nation.
                </p>
                <p>
                  In the Cariboo, Chilcotin, and Coast region, the traditional
                  and unceded territory of the Tsilhqot&rsquo;in, the Northern
                  Secwepemc including the T&rsquo;exelcemc and
                  Tsq&rsquo;escenemc nations, St&apos;át&apos;imc, Nuxalk,
                  Gitga&rsquo;at, Wuikinuxv, and Heiltsuk.
                </p>
                <p>
                  In the Thompson-Okanagan region, the traditional and unceded
                  territory of the Nlaka&rsquo;pamux Peoples, Syilx Peoples,
                  and Secwepemc Nations.
                </p>
                <p>
                  In the Kootenay region, the traditional and unceded territory
                  of the Ktunaxa nation, Secwepemc nations, Syilx, and Sinixt
                  Peoples.
                </p>
                <p>
                  In Northern B.C., the traditional and unceded territory of
                  the Lheidli T&rsquo;enneh, Haida, Tsimshian, Nisga&rsquo;a,
                  Haisla, Gitxsan, Wet&rsquo;suwet&rsquo;en, Tahltan peoples,
                  and on Treaty 8 territory, lands of the Sicannie, Slavey,
                  Dene and Dane-Zaa, Cree, Saulteaux, and Métis.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
