<script setup>
import { ref, onMounted } from "vue";
import craftCMSLogo from "./../assets/img/logos/craftCMS.svg";

const skills = ref([
  {
    category: "Programmiersprachen & Frameworks",
    items: [
      {
        name: "HTML",
        progress: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        progress: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "SASS/SCSS",
        progress: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
      {
        name: "PHP",
        progress: 60,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "Javascript",
        progress: 50,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React.js",
        progress: 40,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
  {
    category: "CMS und Shopsysteme",
    items: [
      {
        name: "WordPress",
        progress: 85,
        icon: "https://cdn.simpleicons.org/wordpress/21759B",
      },
      {
        name: "CraftCMS",
        progress: 40,
        icon: craftCMSLogo,
      },
      {
        name: "Shopify",
        progress: 45,
        icon: "https://cdn.simpleicons.org/shopify/7AB55C",
      },
    ],
  },
  {
    category: "Software und sonstiges",
    items: [
      {
        name: "Adobe XD",
        progress: 85,
        icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg",
      },
      {
        name: "Adobe Illustrator",
        progress: 70,
        icon: "https://cdn.simpleicons.org/adobeillustrator/FF9A00",
      },
      {
        name: "Adobe Photoshop",
        progress: 65,
        icon: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg",
      },
      {
        name: "Github / version-control",
        progress: 85,
        icon: "https://cdn.simpleicons.org/github/ffffff",
      },
    ],
  },
]);

// Sort items in each category by progress (descending)
skills.value.forEach((category) => {
  category.items.sort((a, b) => b.progress - a.progress);
});

const sectionRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-progress");
        }
      });
    },
    { threshold: 0.1 },
  );

  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach((bar) => observer.observe(bar));
});
</script>

<template>
  <section ref="sectionRef" class="container w-full mb-32 xl:mb-64">
    <div class="container">
      <div class="flex flex-col gap-6 xl:gap-14 md:flex-row">
        <div class="basis-5/12">
          <h2 class="text-lg xl:text-2xl font-headline leading-headline">
            Meine Skills
          </h2>
        </div>
      </div>
    </div>
    <div class="container flex flex-wrap gap-20 mt-20">
      <div
        v-for="(category, categoryIndex) in skills"
        :key="categoryIndex"
        class="flex-1 min-w-[300px] space-y-6"
      >
        <h2 class="text-lg font-normal text-white">
          {{ category.category }}
        </h2>

        <div class="grid gap-6">
          <div
            v-for="(skill, skillIndex) in category.items"
            :key="skillIndex"
            class="flex items-center gap-4"
          >
            <img
              :src="skill.icon"
              :alt="skill.name"
              class="object-contain w-8 h-8"
            />

            <div class="flex-1">
              <div class="mb-1 text-sm text-white">{{ skill.name }}</div>
              <div class="h-2 overflow-hidden bg-gray-700 rounded-full">
                <div
                  class="w-0 h-full bg-blue-500 rounded-full progress-bar"
                  :style="`--progress: ${skill.progress}%`"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.progress-bar {
  transition: width 1s ease-out;
  @apply bg-blue;
}

.progress-bar.animate-progress {
  width: var(--progress);
}
</style>
