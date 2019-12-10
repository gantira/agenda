<template>
  <div>
    <form @submit.prevent="onSubmit">
      <b-field label="Nama Event" label-position="on-border">
        <b-input v-model="form.event"></b-input>
      </b-field>
      <b-field label="Tanggal Event" label-position="on-border">
        <b-datepicker v-model="form.tanggal"></b-datepicker>
      </b-field>
      <b-field label="Keterangan" label-position="on-border">
        <b-input v-model="form.keterangan" maxlength="200" type="textarea"></b-input>
      </b-field>

      <b-button tag="input" native-type="submit" value="Submit input" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        event: "",
        tanggal: "",
        keterangan: ""
      }
    };
  },
  methods: {
    onSubmit() {
      try {
        this.$store.dispatch("add", this.form);

        this.$buefy.toast.open({
          message: "New Agenda!",
          type: "is-success"
        });

        this.clearForm();
      } catch (error) {
        console.log(error);
      }
    },
    clearForm() {
      this.form.event = ""
      this.form.tanggal = ""
      this.form.keterangan = ""
    }
  }
};
</script>