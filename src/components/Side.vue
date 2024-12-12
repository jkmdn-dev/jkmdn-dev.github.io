<script setup lang="ts">
import Logo from "./logos/JPLogo.vue";
import Section from "./side/Section.vue";
import SectionText from "./side/SectionText.vue";
import SkillBar from "./side/SkillBar.vue";
import SkillList from "./common/SkillList.vue";
import ContactLine from "./side/ContactLine.vue";
import GithubLogo from "./logos/GithubLogo.vue";
import EmailLogo from "./logos/EmailLogo.vue";
import WebsiteLogo from "./logos/WebsiteLogo.vue";
import LinkedInLogo from "./logos/LinkedInLogo.vue";
</script>

<template>
  <div className="grid grid-rows-[1fr_auto] gap-16 col-start-2 bg-side">
    <div class="flex flex-col gap-y-6">
      <Logo />
      <Section title="PROFILE">
        <SectionText
          >Joakim is a systems developer with over 10 years of experience in the
          field. With a strong background in science and data analysis he has
          developed a deep understanding of the complexities of modern systems.
          The last 6 years he has applied his knowledge to develop and maintain
          many systems, ranging from small internal tools to large-scale
          enterprise systems.</SectionText
        >
      </Section>
      <Section title="SKILLS">
        <SkillBar skill="Linux/Bash/Python" :strong="5" />
        <SkillBar skill="C/C++" :strong="4" :weak="1" />
        <SkillBar skill="MAKE/CMAKE" :strong="4" :weak="1" />
        <SkillBar skill="JS/TS/HTML/CSS" :strong="4" />
        <SkillBar skill="Rust" :strong="3" :weak="1" />
        <SkillBar skill="Zig" :strong="3" />
        <SkillBar skill="SQL/NoSQL" :strong="3" />
        <SkillBar skill="CI/CD" :strong="2" :weak="1" />
      </Section>
      <Section title="MAJOR FRAMEWORKS">
        <SkillList
          :skills="[
            'QT',
            'REACT-JS',
            'NEXT-JS',
            'DOCKER',
            'YOCTO/OPENEMBEDDED',
            'SCIKIT-LEARN/-IMAGE',
            'OPEN-CV',
            'PYTORCH/TENSORFLOW',
            'NUMPY/PANDAS',
            'DJANGO/FLASK',
          ]"
          color_mode="dark"
        />
      </Section>
    </div>
    <div class="grid content-end mb-5">
      <Section title="CONTACT">
        <div class="grid grid-flow-row gap-y-0.5">
          <ContactLine>
            <EmailLogo />
            <p class="content-center">jkmdn@proton.me</p>
          </ContactLine>
          <ContactLine>
            <WebsiteLogo />
            <p class="content-center">jkmdn.dev</p>
          </ContactLine>
          <ContactLine>
            <GithubLogo />
            <p class="content-center">github.com/jkamdn-dev</p>
          </ContactLine>
          <ContactLine>
            <LinkedInLogo />
            <p class="content-center">in/JoakimPaulsson</p>
          </ContactLine>
        </div>
      </Section>
    </div>
  </div>
</template>
