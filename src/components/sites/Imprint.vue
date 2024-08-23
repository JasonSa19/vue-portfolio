<script setup>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
</script>

<template>
  <Header />
  <div class="container mx-auto my-24">
    <h1 class="mb-10 text-2xl font-bold">Impressum</h1>

    <div class="mb-6">
      <h2>Angaben gemäß § 5 TMG:</h2>
      <p>
        Max Mustermann<br />
        Musterstraße 1<br />
        Deutschland
      </p>
    </div>

    <div class="mb-6">
      <strong>Vertreten durch:</strong>
      <p>Max Mustermann</p>
    </div>

    <div class="mb-6">
      <strong>Kontakt:</strong>
      <p>Telefon: +49 123 456789</p>
      <p>E-Mail: info@musterwebsite.de</p>
    </div>

    <div class="mb-6">
      <strong>Registereintrag:</strong>
      <p>
        Eintragung im Handelsregister.<br />
        Registergericht: Amtsgericht Musterstadt<br />
        Registernummer: HRB 12345
      </p>
    </div>

    <div class="mb-6">
      <strong>Umsatzsteuer-ID:</strong>

      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
        DE123456789
      </p>
    </div>
    <div class="mb-6">
      <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
      <p>
        Max Mustermann<br />
        Musterstraße 1<br />
        12345 Musterstadt<br />
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
