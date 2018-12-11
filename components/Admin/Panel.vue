<template>
    <div class="columns">
          <div class='column is-12'>
            <div class="card events-card">
              <header class="card-header">
                <p class="card-header-title">Events</p>
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
                      <input class="input is-large" type="text" placeholder>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <table class="table is-fullwidth is-striped">
                    <tbody>
                      <tr>
                        <td width="5%">
                          <i class="fa fa-bell-o"></i>
                        </td>
                        <td>titulo de la pagina</td>
                        <td>
                          <a class="button is-small is-primary" href="#">Editar</a>
                          <a class="button is-small is-danger" href="#">Borrar</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <footer class="card-footer">
                <nav class="pagination is-centered" role="navigation" aria-label="pagination">
                  <a class="pagination-previous">Previous</a>
                  <a class="pagination-next">Next page</a>
                  <ul class="pagination-list">
                    <li>
                      <a class="pagination-link" aria-label="Goto page 45">1</a>
                    </li>
                    <li>
                      <a class="pagination-link is-current" aria-current="page">2</a>
                    </li>
                  </ul>
                </nav>
              </footer>
            </div>
          </div>
        </div>

</template>
<script>
export default {
  name: "Panel",
  props: {
    size: {
      type: Number,
      default: 6,
      validator: value => value > 3 && value < 13
    }
  },
};
</script>