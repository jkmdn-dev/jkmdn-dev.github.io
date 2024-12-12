<script setup lang="ts">
import Section from "./Section.vue";
import SectionEntry from "./SectionEntry.vue";
import List from "../common/List.vue";
import ListItemWithHeader from "../common/ListItemWithHeader.vue";
import ListItemCommon from "../common/ListItemCommon.vue";
</script>

<template>
	<Section letter="W" title="WORK EXPERIENCE">
	      <SectionEntry
	        title="DATA SCIENTIST"
	        company="B3 LINK AB"
	        start="AUG. 2024"
	        end="ON GOING"
	        :skills="[
	          'PYTHON',
	          'MATPLOTLIB',
	          'NUMPY',
	          'PANDAS',
	          'SCIKIT-LEARN/-IMAGE',
	          'PYTORCH/TENSORFLOW',
	          'OPEN-CV',
	          'CI/CD',
	          'GITHB',
	          'COMPUTER VISION',
	          'DATA ANALYSIS',
	          'STATISTICS',
	        ]"
	      >
	        Contract from Trafikvekrket; Automatically finding isolation joints
	        between rails using images and then classify them and identify status.
	      </SectionEntry>
	      <SectionEntry
	        title="SYSTEMS DEVELOPER"
	        company="OMICRON NORD AB"
	        start="APRIL 2020"
	        end="JULY 2024"
	        :skills="[
	          'LINUX',
	          'BASH',
	          'YOCTO/OPENEMBEDDED',
	          'C/C++',
	          'QT',
	          'PYTHON',
	          'EMBEDDED SYSTEMS',
	          'CAN',
	          'DDS',
	          'MATLAB',
	          'SIMULINK',
	          'DEVOPS',
	        ]"
	      >
	        <p>Major contracts/customers:</p>
	        <List>
	          <ListItemWithHeader>
	            <template #header>ELPRESS AB</template>
	            <template #content>
	              Delivered a web platform to handle and communicate orders coupled
	              to electrical crimping tools.
	            </template>
	          </ListItemWithHeader>
	          <ListItemWithHeader>
	            <template #header>BAE SYSTEMS HÄGGLUNDS</template>
	            <template #content>
	              Integrating and upgrading embedded systems, including embedded
	              Linux, CAN, video linux driver pipeline, and more.
	            </template>
	          </ListItemWithHeader>
	        </List>
	      </SectionEntry>
	      <SectionEntry
	        title="DATA SCIENTIST / SYSTEMS DEVELOPER"
	        company="GUIDELINE GEO AB"
	        start="JAN. 2019"
	        end="MAY 2020"
	        :skills="[
	          'C/C++',
	          'QT',
	          'C#',
	          '.NET',
	          'PYTHON',
	          'MATPLOTLIB',
	          'NUMPY',
	          'PANDAS',
	          'SCIKIT-LEARN/-IMAGE',
	          'PYTORCH/TENSORFLOW',
	          'JS/TS/HTML/CSS',
	          'REACT-JS',
	          'WASM',
	          'AZURE',
	          'DEVOPS',
	          'CI/CD',
	          'DATA ANALYSIS',
	          'STATISTICS',
	        ]"
	      >
	        <p class="mb-3">
	          Main responsibility was to develop and maintain a data science
	          pipeline for the Guideline Geo project. The aim was to use image
	          recognition to automatically find objects under ground.
	        </p>
	        <p>Other responsibilities included:</p>
	        <List>
	          <ListItemCommon>
	            Developing data analysis and visualization tools for internal
	            developers and external customers.
	          </ListItemCommon>
	          <ListItemCommon>
	            Data serialization and deserialization tools.
	          </ListItemCommon>
	          <ListItemCommon> Master thesis supervision. </ListItemCommon>
	        </List>
	      </SectionEntry>
	      <SectionEntry
	        title="P.HD. SPACE- & PLASMA-PHYSICS"
	        company="UNIVERSITY OF OSLO"
	        start="OKT. 2014"
	        end="DEC. 2018"
	        :skills="[
	          'C/C++',
	          'PYTHON',
	          'MATLAB',
	          'PHYSICS',
	          'MATHEMATICS',
	          'DATA ANALYSIS',
	          'STATISTICS',
	        ]"
	      >
	        Conducted research with focus on data analysis and simulations of
	        plasma/spacecraft interactions. Developed methods and algorithms to
	        extract data from spacecraft mounted sounding instruments in highly
	        dynamic environments.
	      </SectionEntry>
	    </Section>
</template>

