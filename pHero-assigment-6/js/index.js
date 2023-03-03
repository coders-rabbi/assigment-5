const loadHubs = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  displayHubs(data.data);
  toggleSpinner(true);
}
const displayHubs = hub => {
  const hubContainer = document.getElementById('hub-container');

  // Show all cards
  // const showAll = hub = hub.slice(0, 4);
  hub.tools.forEach(hub => {
    // console.log(hub);
    const hubDiv = document.createElement('div');
    hubDiv.classList.add('col');
    hubDiv.innerHTML = `
      <div class="card h-100">
        <img src="${hub.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title fw-bold">Features</h5>
          <ol type="1">
            <li>${hub.features[1] ? hub.features[0] : 'Limited Features'}</li>
            <li>${hub.features[1] ? hub.features[1] : 'Limited Features'}</li>
            <li>${hub.features[2] ? hub.features[2] : 'Limited Features'}</li>
          </ol>
        </div>
        <div class="card-footer">
        <h5 class="card-title">${hub.name}</h5>
        <div class="d-md-flex justify-content-between align-items-center">
          <div>
            <p>
                <i class="fa-solid fa-calendar-days pe-2"></i>
                ${hub.published_in}
            </p>
          </div>
          
          <button onclick="loadMoreDetails('${hub.id}')" type="button" class="btn bg-danger-subtle rounded-5" data-bs-toggle="modal" data-bs-target="#apimodal">
                <i class="fa-solid fa-arrow-right text-danger"></i>
          </button>
        </div>
        <!-- Modal -->
            
        </div>
      </div>
      `;
    hubContainer.appendChild(hubDiv);
  })
  // Stop Loader
  toggleSpinner(false);
};


const toggleSpinner = isLoading => {
  const spinner = document.getElementById('loader');
  if (isLoading === true) {
    spinner.style.display = 'block';
  }
  else {
    spinner.style.display = 'none';
  }
};


const loadMoreDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  const res = await fetch(url);
  const data = await res.json();
  displayHubDetails(data.data);
  // toggleSpinner(true);
}

const displayHubDetails = hub => {
  console.log(hub);
  const modalTitle = document.getElementById('api-Modal-Title');
  modalTitle.innerText = hub.tool_name;
  const modalDetail = document.getElementById('modal-details');
  modalDetail.innerHTML = `
  <p>${hub.description}</p>
  <ol type="1">
    <li>${hub.features[1].feature_name ? hub.features[1].feature_name : 'Limited Feature'}</li>
    <li>${hub.features[2].feature_name ? hub.features[2].feature_name : 'Limited Feature'}</li>
    <li>${hub.features[3].feature_name ? hub.features[3].feature_name : 'Limited Feature'}</li>
  </ol>
  `;

}




loadHubs()
