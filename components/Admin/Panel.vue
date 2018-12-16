<template>
  <div class="columns">
    <div class="column is-12">
      <div class="card events-card">
        <header class="card-header">
          <p class="card-header-title">{{title}}</p>
          <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div class="card-table">
          <div class="card-content">
            <div class="container is-fluid">
              <div class="field has-addons">
                <div class="control">
                  <input class="input is-medium" type="text" v-model="query" placeholder="Buscar">
                </div>
                <div class="control">
                  <a class="button is-info is-medium" @click.prevent="create()">Agregar</a>
                </div>
              </div>
            </div>
          </div>
          <div class="content">
            <table class="table is-fullwidth is-striped">
              <tbody>
                <tr v-for="item in  reversedData" :key="item.id">
                  <td width="5%">
                    <i class="fa fa-bell-o"></i>
                  </td>
                  <td>{{item.title}}</td>
                  <td>
                    <button
                      class="button is-small is-primary"
                      @click.prevent="clicked(item)"
                    >sleccionar</button>
                    <a class="button is-small is-danger" href="#">Borrar</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="buttons has-addons is-centered">
          <Paginate
            :total-pages="Math.round(entity.length/10)"
            :total="entity.length"
            :per-page="10"
            :current-page="currentPage"
            @pagechanged="onPageChange"
          />
        </div>
        <br>
      </div>
    </div>
  </div>
</template>
<script>
import Paginate from "~/components/Admin/Paginate";
export default {
  name: "Panel",
  components: {
    Paginate
  },
  props: {
    title: {
      type: String,
      requiered: true,
      validator: value => value.length > 3
    },
    entity: {
      type: Array,
      requiered: true
    }
  },
  data() {
    return {
      currentPage: 1,
      query: null
    };
  },
  methods: {
    onPageChange(page) {
      this.query = null;
      this.currentPage = page;
    },
    clicked(item) {
      this.$emit("buttonClicked", item);
    },
    create() {
      this.$emit("buttonCreate");
    }
  },
  computed: {
    reversedData: function() {
      let source;
      if (this.query) {
        source = this.entity.filter(
          ee =>
            ee.title
              .toString()
              .toLowerCase()
              .indexOf(this.query.toString().toLowerCase()) > -1
        );
      } else {
        source = this.entity.slice(
          this.currentPage * 10,
          (this.currentPage + 1) * 10
        );
      }

      return source;
    }
  }
};
</script>