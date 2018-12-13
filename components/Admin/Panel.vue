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
            <div class="content">
              <div class="control has-icons-left has-icons-right">
                <input class="input is-large" type="text"  v-model="query" placeholder>
              </div>
            </div>
          </div>
          <div class="content">
            <table class="table is-fullwidth is-striped">
              {{entity.length}}
              <tbody>
                <tr v-for="item in  reversedData" :key="item._id">
                  <td width="5%">
                    <i class="fa fa-bell-o"></i>
                  </td>
                  <td>{{item.title}}</td>
                  <td>
                    <a class="button is-small is-primary" href="#">Editar {{item.id}}</a>
                    <a class="button is-small is-danger" href="#">Borrar</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <footer class="card-footer">
          <Paginate
            :total-pages="Math.round(entity.length/10)"
            :total="entity.length"
            :per-page="10"
            :current-page="currentPage"
            @pagechanged="onPageChange"
          />
        </footer>
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
  data () {
    return {
      currentPage: 1,
      query:null
    };
  },
  methods: {
    onPageChange(page) {
      this.query=null;
      this.currentPage = page;
    }
  },
  computed: {
     reversedData: function () {
       let source
       if(this.query){
          source=  this.entity.filter(ee => ee.title.toString().toLowerCase().indexOf(this.query.toString().toLowerCase()) > -1);
       }else{
         source = this.entity.slice((this.currentPage*10),((this.currentPage+1)*10));
       }
       
      return source
    },
  },
};
</script>