export default function FiruzActorWebsite() {
  const profile = {
    name: 'Firuz Ali Nazar',
    title: 'Acteur · Talent Multilingue',
    age: '24 ans',
    location: 'Montréal, Canada',
    origins: 'Origines afghanes',
    languages: ['Français', 'Anglais', 'Dari'],
    height: "6'2\"",
    weight: '160 lbs',
    eyes: 'Bruns',
    hair: 'Bruns',
    email: 'management@firuzalinazar.ca'
  };

  const gallery = [
    '/images/KM_0425_©VeroB.jpg',
    '/images/KM_0441_©VeroB.jpg',
    '/images/KM_0442_©VeroB.jpg',
    '/images/KM_0455_©VeroB.jpg',
    '/images/KM_0634_©VeroB.jpg',
    '/images/KM_0646_©VeroB.jpg',
    '/images/KM_0785_©VeroB.jpg',
    '/images/KM_0963_©VeroB.jpg',
    '/images/KM_1024_©VeroB.jpg'
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAV */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-lg tracking-widest font-semibold">FIRUZ</div>
          <nav className="flex gap-8 text-sm text-white/70">
            <a href="#about" className="hover:text-white">À propos</a>
            <a href="#gallery" className="hover:text-white">Galerie</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

        <div>
          <h1 className="text-6xl font-semibold leading-tight">{profile.name}</h1>

          <p className="mt-6 text-lg text-white/70 leading-8 max-w-xl">
            Acteur basé à Montréal avec une présence cinématographique forte. 
            Disponible pour films, séries, vidéoclips et publicité.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
            >
              Contacter le management
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-12 text-sm text-white/70">
            <div>Âge : {profile.age}</div>
            <div>Taille : {profile.height}</div>
            <div>Poids : {profile.weight}</div>
            <div>Langues : {profile.languages.join(', ')}</div>
            <div>Yeux : {profile.eyes}</div>
            <div>Cheveux : {profile.hair}</div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-white/10">
          <img
            src="/images/KM_0425_©VeroB.jpg"
            alt="Firuz portrait"
            className="w-full h-full object-cover"
          />
        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16 text-center">

        <h2 className="text-3xl font-semibold">À propos</h2>

        <p className="mt-6 text-white/70 leading-8">
          Firuz Ali Nazar est un acteur basé à Montréal avec des origines afghanes.
          Il parle français, anglais et dari. Son jeu se distingue par une présence
          naturelle à l'écran et une grande intensité émotionnelle.
        </p>

      </section>


      {/* GALLERY */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-semibold mb-10">Galerie</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-2xl border border-white/10">
              <img src={img} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

      </section>


      {/* DEMO REEL */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">

        <h2 className="text-3xl font-semibold">Bande Démo</h2>

        <div className="mt-10 rounded-2xl overflow-hidden border border-white/10">
          <video controls className="w-full">
            <source src="/videos/bande-annonce.mp4" type="video/mp4" />
          </video>
        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20 text-center">

        <h2 className="text-3xl font-semibold">Contact</h2>

        <p className="mt-6 text-white/70">
          Pour castings, collaborations ou demandes professionnelles.
        </p>

        <div className="mt-10">
          <a
            href={`mailto:${profile.email}`}
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
          >
            {profile.email}
          </a>
        </div>

      </section>


      {/* FOOTER MANAGEMENT */}
      <footer className="border-t border-white/10 py-12 text-center">

        <div className="flex flex-col items-center gap-4">

          <img
            src="/images/AZD.png"
            alt="Azad Management"
            className="h-16"
          />

          <div className="text-white/60 text-sm">
            Managed by Azad Management · Quebec, Canada
          </div>

        </div>

      </footer>


    </div>
  );
}
