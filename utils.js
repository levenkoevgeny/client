export function getLoadListFunction(modelName) {
  return async (cadetId) => {
    if (cadetId) {
      this[`${modelName}APIInstance`].searchObj.cadet = cadetId
    }
    const res =
      await this[`${modelName}APIInstance`].getItemsList("token is here!!!")
    return res.data
  }
}

// methods for lists

export function showAddNewMainItemModal() {
  this.clearFormData()
  let addModal = this.$refs.mainItemAddModal
  let myModal = new bootstrap.Modal(addModal, {
    keyboard: false,
  })
  myModal.show()
}

export async function showUpdateMainItemModal(id) {
  this.clearFormData()
  try {
    const response = await this.mainItemAPIInstance.getItemData("token", id)
    this.itemForm = await response.data
  } catch (e) {
    this.isError = true
  } finally {
  }
  let updateModal = this.$refs.mainItemUpdateModal
  let myModal = new bootstrap.Modal(updateModal, {
    keyboard: false,
  })
  myModal.show()
}

export function showDeleteApproveModal() {
  let addModal = this.$refs.deleteApproveModal
  let myModal = new bootstrap.Modal(addModal, {
    keyboard: false,
  })
  myModal.show()
}

export function showDeleteApproveMultipleModal() {
  let addModal = this.$refs.deleteApproveMultipleModal
  let myModal = new bootstrap.Modal(addModal, {
    keyboard: false,
  })
  myModal.show()
}

export async function addNewMainItem() {
  this.isLoading = true
  this.isError = false
  try {
    const response = await this.mainItemAPIInstance.addItem("this.token", {
      ...this.itemForm,
      cadet: this.cadetId,
    })
    const newItemData = await response.data
    this.mainItemList.results.push(newItemData)
    this.$refs.mainItemAddModalCloseButton.click()
  } catch (e) {
    console.log(e)
    this.isError = true
  } finally {
    this.isLoading = false
  }
}

export async function updateMainItem() {
  try {
    const response = await this.mainItemAPIInstance.updateItem(
      "this.token",
      this.itemForm,
    )
    const updatedItem = await response.data
    this.mainItemList.results = this.mainItemList.results.map((item) => {
      if (item.id === updatedItem.id) {
        return { ...item, ...updatedItem }
      } else return item
    })
    this.$refs.mainItemUpdateModalCloseButton.click()
  } catch (e) {
    console.log(e)
    this.isError = true
  } finally {
    this.isLoading = false
  }
}

export async function updatePaginator(url) {
  this.isLoading = true
  this.isError = false
  try {
    const response = await this.mainItemAPIInstance.updateList(
      url,
      "this.userToken",
    )
    this.mainItemList = await response.data
  } catch (error) {
    this.isError = true
  } finally {
    this.isLoading = false
  }
}

export function checkAllHandler(e) {
  if (e.target.checked) {
    this.mainItemList.results = this.mainItemList.results.map((item) => ({
      ...item,
      isSelected: true,
    }))
  } else {
    this.mainItemList.results = this.mainItemList.results.map((item) => ({
      ...item,
      isSelected: false,
    }))
  }
}

export function clearFormData() {
  this.itemForm = Object.assign({}, this.mainItemAPIInstance.formData)
}

export function checkedForDeleteCount() {
  let counter = 0
  this.mainItemList.results.map((item) => {
    if (item.isSelected) {
      counter++
    }
  })
  return counter
}

export async function deleteItemHandler() {
  this.isLoading = true
  this.isError = false

  try {
    await this.mainItemAPIInstance.deleteItem("this.token", this.deleteItemId)
    await this.loadData()
    this.$refs.deleteApproveModalCloseButton.click()
  } catch (e) {
    this.isError = true
  } finally {
    this.isLoading = false
  }
}

export async function deleteCheckedItemsHandler() {
  this.isLoading = true
  this.isError = false
  let requestIds = []
  this.mainItemList.results.map((item) => {
    if (item.isSelected) {
      requestIds.push(item.id)
    }
    return
  })
  let requests = requestIds.map((id) =>
    this.mainItemAPIInstance.deleteItem("this.token", id),
  )
  Promise.all(requests)
    .then(async () => {
      await this.loadData()
      this.$refs.deleteApproveModalMultipleCloseButton.click()
    })
    .catch(() => (this.isError = true))
    .finally(() => {
      this.isLoading = false
    })
}
