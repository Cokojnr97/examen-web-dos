import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Button from "../../components/Button/Button";

const HomePage = () => {
  return (

    <div class="container">

      <HeroBanner />

      <section>
        <div class="section-header">
          <h2 class="section-title">
            <i data-lucide="bar-chart-3"></i>
            <span>Resumen del Repositorio</span>
          </h2>
        </div>
        <div class="stats-grid" id="resumenMetricas"></div>
      </section>

      <section style="margin-top: 44px;">
        <div class="section-header">
          <h2 class="section-title">
            <i data-lucide="star"></i>
            <span>Obras Destacadas</span>
          </h2>
          <Button variant="outline">
            <span>Explorar Catálogo Completo</span>
            <i data-lucide="arrow-right" class="icon-sm"></i>
          </Button>
        </div>

        <div class="cards-grid" id="gridDestacados"></div>
      </section>

    </div>
  )
}

export default HomePage