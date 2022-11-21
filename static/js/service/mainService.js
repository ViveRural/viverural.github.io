function newPost(endpoint) {
    const xhr = new XMLHttpRequest()
    xhr.open("POST", endpoint)
    xhr.setRequestHeader("Content-Type", "application/json");

    return xhr
}

function newGet(endpoint) {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.open("GET", endpoint)
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send()

    return xhr
}

function getListPrograms() {
  $('#get-progs-btn').hide()
  $('#loading-btn').show()
  const xhr = new newGet("/getListPrograms")
  var table = $('#games-table').DataTable();

  xhr.onload = function() {
      if (xhr.status === 200) {
          data = xhr.response
          for (let i = 0; i < data.length; i++) {
            table.row.add([i+1, data[i].name, data[i].genre, data[i].tape]).draw(false);
          }
          $('#loading-btn').hide()
          $('#games-table-container').show();
          loading-btn

      } else if (xhr.status === 404) {
          console.log("No records found");
      }

      //triggered periodically as the client receives data
      //used to monitor the progress of the request
      xhr.onprogress = function(e) {
        if (e.lengthComputable) {
        console.log(`${e.loaded} B of ${e.total} B loaded!`)
        } else {
        console.log(`${e.loaded} B loaded!`)
        }
    }
            

    //triggered when a network-level error occurs with the request
    xhr.onerror = function() {
        console.log("Network error occurred");
    }
  }
}

function getProgram() {
  var name = document.getElementById("search-input").value;
  
  const xhr = new newGet("/getProgram?programa=" + name)

  $('#found-regs').hide()
  $('#search-table-container').hide()
  $('#not-found-regs').hide()
  
  xhr.onload = function() {
    if (xhr.status === 200) {
      data = xhr.response
      console.log(data)

      if (!data.error) {
        let tab =
        `<thead><tr>
        <th>Nº</th>
        <th>NOMBRE</th>
        <th>GÉNERO</th>
        <th>CINTA</th>
        </tr></thead>`;

        for (let i = 0; i < data.programs.length; i++) {
          tab += `<tr style="border-top-width: 1px; border-bottom-width: 0px !important;">
          <td style="border-bottom-width: 0px !important;">${i+1} </td>
          <td style="border-bottom-width: 0px !important;">${data.programs[i].name}</td>
          <td style="border-bottom-width: 0px !important;">${data.programs[i].genre}</td>
          <td style="border-bottom-width: 0px !important;">${data.programs[i].tape}</td>		
          </tr>`;
        } 
        
        // Setting innerHTML as tab variable
        document.getElementById("programs-table").innerHTML = tab;

        $('#found-regs').show()
        $('#search-table-container').show()
      } else {
        $('#not-found-regs').show()
      }

    } else if (xhr.status === 404) {
      console.log("Program not found");
    }
  }

  //triggered when a network-level error occurs with the request
  xhr.onerror = function() {
      console.log("Network error occurred");
  }
}