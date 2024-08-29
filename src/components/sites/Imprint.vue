<script setup>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import arrow from "../svg/arrow.vue";
</script>

<template>
  <Header />
  <div class="container mx-auto my-16 md:my-24 anim" id="imprint">
    <router-link
      to="/"
      class="z-20 block mb-8 md:fixed md:left-14 md:bottom-14"
    >
      <div
        class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all rounded-full bg-blue hover:bg-white group"
      >
        <span
          class="absolute bg-blue inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"
        ></span>
        <span
          class="relative flex items-center w-full gap-4 text-left text-white transition-colors duration-200 ease-in-out rounded-full group-hover:text-blue group-hover:bg-white"
        >
          <arrow
            class="w-6 transition-all rotate-180 h-7 fill-white group-hover:ml-1 group-hover:fill-blue"
          ></arrow>
          Zurück zur Startseite
        </span>
      </div>
    </router-link>
    <h1 class="mb-10 text-2xl font-bold">Impressum</h1>

    <div class="mb-6">
      <h2>Angaben gemäß § 5 TMG:</h2>
      <p>
        Jason Sauerwald<br />
        Am Hellenteich 28<br />
        59929 Brilon<br />
        Deutschland
      </p>
    </div>

    <div class="mb-6">
      <strong>Vertreten durch:</strong>
      <p>Jason Sauerwald</p>
    </div>

    <div class="mb-6">
      <strong>Kontakt:</strong>
      <p>Telefon: +49 152 31900730</p>
      <p>E-Mail: jason@sauerwald.info</p>
    </div>

    <div class="mb-6">
      <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
      <p>
        Jason Sauerwald<br />
        Am Hellenteich 28<br />
        59929 Brilon<br />
        Deutschland
      </p>
    </div>

    <div class="mb-6">
      <strong>Haftungsausschluss:</strong>

      <p>
        Die Informationen auf dieser Website wurden sorgfältig geprüft und
        werden regelmäßig aktualisiert. Trotzdem kann keine Garantie für die
        Vollständigkeit, Richtigkeit und letzte Aktualität der Angaben
        übernommen werden. Wir behalten uns vor, die bereitgestellten
        Informationen jederzeit zu ändern oder zu ergänzen.
      </p>
    </div>

    <div class="mb-6">
      <strong>Haftung für Links:</strong>

      <p>
        Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte
        wir keinen Einfluss haben. Daher können wir für diese fremden Inhalte
        auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
        stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>
    </div>

    <div class="mb-6">
      <strong>Urheberrecht:</strong>

      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser
        Website unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
      </p>
    </div>

    <div class="mb-6">
      <strong>Streitschlichtung:</strong>

      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </div>
  </div>
  <Footer />
</template>
