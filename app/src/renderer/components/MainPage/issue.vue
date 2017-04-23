<template>
  <md-layout md-align="center">
    <md-card v-if="issue" md-with-hover>
      <md-card-header>
        <md-avatar>
          <img :src="issue.user.avatarUrl" alt="People">
        </md-avatar>
        <div class="md-title">{{ issue.title }}</div>
        <div class="md-subhead">issue#{{ issue.number }}</div>
      </md-card-header>

      <md-card-content>
        <md-layout md-gutter>
          <vue-markdown class='markdown' :source='issue.body'></vue-markdown>
        </md-layout md-gutter>
      </md-card-content>
      <md-card-actions>
        <md-button @click.native="openOnGithub" >Open On Github</md-button>
      </md-card-actions>
    </md-card>
  </md-layout>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  const shell = require('electron').shell

  export default {
    computed: {
      issue () {
        return this.$store.state.githubData.pull
      }
    },
    methods: {
      openOnGithub () {
        shell.openExternal(this.$store.state.githubData.issue.htmlUrl)
      }
    },
    components: {
      VueMarkdown
    }
  }
</script>
