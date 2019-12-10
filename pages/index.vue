<template>
  <section class="section">
    <div class="columns">
      <div class="column is-4">
        <form-agenda />
      </div>
      <div class="column">
        <list-agenda :data="agendas" />
      </div>
    </div>
  </section>
</template>

<script>
import ListAgenda from "~/components/ListAgenda";
import FormAgenda from "~/components/FormAgenda";

export default {
  components: {
    FormAgenda,
    ListAgenda
  }
};
</script>
