<template>
  <div v-if="agendas.length">
    <b-collapse class="card" aria-id="contentIdForA11y3" v-for="(item, i) in agendas" :key="i">
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
      >
        <p class="card-header-title">{{item.tanggal | moment }} | {{item.event}}</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">{{item.keterangan}}</div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item" @click="destroy(i)">Delete</a>
      </footer>
    </b-collapse>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["agendas"])
  },
  methods: {
    destroy(i) {
      this.$buefy.dialog.confirm({
        message: "Hapus Agenda?",
        onConfirm: () => {
            this.$store.dispatch('delete', i)
            this.$buefy.toast.open("Agenda telah dihapus")

        }
      });
    }
  }
};
</script>